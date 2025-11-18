import os
import re

# --- Configurações ---
# O script vai olhar especificamente nesta pasta e subpastas
DIRETORIO_ALVO = "./src/components/main/main-content"
# ---------------------

def corrigir_arquivos():
    print(f"--- 🛠️  Iniciando correção de caminhos em: {DIRETORIO_ALVO} ---")
    
    if not os.path.exists(DIRETORIO_ALVO):
        print(f"❌ Erro: A pasta '{DIRETORIO_ALVO}' não existe.")
        return

    # Regex explicada:
    # 1. (src=["'])       -> Captura o começo: src=" ou src='
    # 2. (?:.*?)          -> Ignora qualquer coisa que venha antes de main-imgs (pontos, barras, etc)
    # 3. (main-imgs/.*?)  -> Captura a parte que importa: de main-imgs/ para frente
    # 4. (["'])           -> Captura o fechamento das aspas
    regex_caminho = re.compile(r'(src=["\'])(?:.*?)(main-imgs/.*?)(["\'])')

    arquivos_alterados = 0

    for root, dirs, files in os.walk(DIRETORIO_ALVO):
        for file in files:
            if file.endswith(('.jsx', '.js')):
                file_path = os.path.join(root, file)
                
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    # Função de substituição
                    # Ela pega o que encontrou e força ser: src="/main-imgs/..."
                    def substituir(match):
                        inicio_aspas = match.group(1) # src="
                        caminho_real = match.group(2) # main-imgs/pasta/foto.png
                        fim_aspas = match.group(3)    # "
                        return f'{inicio_aspas}/{caminho_real}{fim_aspas}'

                    new_content, count = regex_caminho.subn(substituir, content)
                    
                    if count > 0:
                        # Só salva se houve mudança real (para não mudar data de modificação à toa)
                        if new_content != content:
                            with open(file_path, 'w', encoding='utf-8') as f:
                                f.write(new_content)
                            print(f"✅ {count} correções em: {file}")
                            arquivos_alterados += 1
                        else:
                            print(f"👍 {file} já estava correto.")
                            
                except Exception as e:
                    print(f"❌ Erro ao ler {file}: {e}")

    print("\n------------------------------------------------")
    if arquivos_alterados > 0:
        print(f"🎉 Finalizado! {arquivos_alterados} arquivos foram corrigidos.")
        print("Agora todos os caminhos começam estritamente com '/main-imgs/'.")
    else:
        print("✨ Tudo limpo! Nenhum caminho incorreto foi encontrado.")

if __name__ == "__main__":
    corrigir_arquivos()