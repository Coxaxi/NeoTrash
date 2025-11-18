import os
import shutil

# --- Configurações ---
PASTA_ALVO = "main-imgs"
DIRETORIO_SRC = "./src"
DIRETORIO_PUBLIC = "./public"
# ---------------------

def encontrar_e_mover():
    print("--- 🕵️  Iniciando busca pela pasta de imagens ---")

    # 1. Verifica se a pasta PUBLIC existe
    if not os.path.exists(DIRETORIO_PUBLIC):
        print(f"❌ Erro: A pasta '{DIRETORIO_PUBLIC}' não foi encontrada na raiz.")
        return

    # 2. Verifica se a pasta já está no lugar certo (dentro de public)
    caminho_destino = os.path.join(DIRETORIO_PUBLIC, PASTA_ALVO)
    if os.path.exists(caminho_destino):
        print(f"⚠️  Atenção: A pasta '{PASTA_ALVO}' JÁ EXISTE dentro de 'public'!")
        print("   Isso significa que ou você já moveu, ou precisa apagar a pasta antiga lá antes de mover a nova.")
        return

    # 3. Procura a pasta dentro de SRC (Recursivamente)
    caminho_encontrado = None
    print(f"🔎 Procurando '{PASTA_ALVO}' dentro de '{DIRETORIO_SRC}'...")

    for root, dirs, files in os.walk(DIRETORIO_SRC):
        if PASTA_ALVO in dirs:
            caminho_encontrado = os.path.join(root, PASTA_ALVO)
            break # Para na primeira que encontrar
    
    if not caminho_encontrado:
        print(f"❌ Não encontrei a pasta '{PASTA_ALVO}' dentro de 'src'.")
        print("   Verifique se o nome está correto ou se ela já foi movida.")
        return

    # 4. Move a pasta
    print(f"✅ Encontrada em: {caminho_encontrado}")
    print(f"📦 Movendo para: {caminho_destino} ...")

    try:
        shutil.move(caminho_encontrado, caminho_destino)
        print("\n--- 🎉 SUCESSO! ---")
        print(f"A pasta '{PASTA_ALVO}' foi movida para a pasta 'public'.")
        print("Agora o navegador vai conseguir achar suas imagens.")
    except Exception as e:
        print(f"❌ Erro ao mover: {e}")

if __name__ == "__main__":
    encontrar_e_mover()