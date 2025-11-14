import os
import re

# --- Configurações ---
DIRETORIO_SRC = './src' # Pasta onde seus componentes estão
EXTENSOES = ('.jsx', '.js', '.tsx', '.ts') # Tipos de arquivo para verificar
# ---------------------

# Regex para encontrar o import: import Variavel from ".../main-imgs/...";
# Captura 1: O nome da variável (ex: Lupa)
# Captura 2: O caminho completo (ex: ../main-imgs/ComoFunciona/lupa.png)
import_regex = re.compile(
    r'^\s*import\s+([A-Za-z0-9_]+)\s+from\s+["\'](.*main-imgs/.*)["\'];?.*$', 
    re.MULTILINE
)

def processar_arquivo(file_path):
    print(f"\n--- 🔎 Processando: {file_path}")
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"  ❌ Erro ao ler o arquivo: {e}")
        return

    new_content = content
    replacements = {}
    
    # 1. Encontrar todos os imports de 'main-imgs'
    matches = import_regex.finditer(content)
    
    for match in matches:
        var_name = match.group(1)
        original_path = match.group(2)
        
        # Constrói o novo caminho absoluto
        # Pega tudo a partir de "main-imgs/"
        try:
            path_suffix = original_path.split('main-imgs/', 1)[1]
            new_path = f"/main-imgs/{path_suffix}"
            replacements[var_name] = new_path
            print(f"  ✔️ Encontrado: '{var_name}' -> '{new_path}'")
        except IndexError:
            print(f"  ⚠️ Aviso: Não consegui processar o caminho: {original_path}")

    if not replacements:
        print("  (Nenhum import de 'main-imgs' encontrado para refatorar)")
        return

    # 2. Substituir os usos (ex: src={Lupa})
    for var_name, new_path in replacements.items():
        # Regex para encontrar o uso: src={Variavel} (com ou sem espaços)
        usage_regex = re.compile(r'src=\{\s*' + re.escape(var_name) + r'\s*\}')
        
        # String de substituição: src="/caminho/novo"
        replacement_str = f'src="{new_path}"'
        
        # Usa .subn() para contar quantas substituições foram feitas
        new_content, count = usage_regex.subn(replacement_str, new_content)
        if count > 0:
            print(f"  🔄 Substituído '{var_name}' por '{new_path}' ({count}x)")

    # 3. Remover as linhas de import originais
    new_content, count = import_regex.subn('', new_content)
    if count > 0:
        print(f"  🗑️  Removidas {count} linhas de import.")

    # 4. Limpar linhas em branco excessivas (opcional)
    new_content = re.sub(r'\n\s*\n', '\n', new_content)

    # 5. Salvar o arquivo modificado
    try:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"  ✅ Arquivo salvo: {file_path}")
    except Exception as e:
        print(f"  ❌ Erro ao salvar o arquivo: {e}")

def main():
    print("Iniciando script de refatoração...")
    print(f"Procurando em: {DIRETORIO_SRC}")
    
    for root, dirs, files in os.walk(DIRETORIO_SRC):
        for file in files:
            if file.endswith(EXTENSOES):
                file_path = os.path.join(root, file)
                processar_arquivo(file_path)
    
    print("\n--- Script finalizado! ---")
    print("Revise as mudanças e faça o commit.")

if __name__ == "__main__":
    main()