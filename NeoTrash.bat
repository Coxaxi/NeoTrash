@echo off
echo Acessando a pasta do projeto...
rem O /d e importante caso a pasta esteja em outro drive
cd /d %~dp0\neo-trash-ppa

echo Iniciando o servidor de desenvolvimento...
rem O comando 'start' e a chave aqui.
rem Ele inicia o 'npm run dev' em uma NOVA janela de CMD.
start "Servidor Neo Trash" npm run dev

echo Aguardando o servidor iniciar (3 segundos)...
rem Adiciona um delay para dar tempo ao Vite de carregar
rem O '/nobreak' impede que o usuario cancele
rem O '> nul' esconde a mensagem do timeout
timeout /t 3 /nobreak > nul

echo Abrindo o navegador...
rem 'start' com uma URL abre no navegador padrao
start http://localhost:5173/

rem 'exit' fecha ESTA janela de script.
rem A janela "Servidor Neo Trash" que abrimos antes continuara rodando.
exit