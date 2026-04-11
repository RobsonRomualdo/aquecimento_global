# Tutorial git + github + como-rodar-codigo

## 1. Instalação de ferramentas:

- Node.js
- Git
- GitHub Desktop

## 2. Como rodar o código na máquina
Após ter entrado no projeto como colaborador no GitHub, faça:

- Clonar repositório > clicar na setinha do botão verde "Code", depois clicar em "open with GitHub Desktop"
- Abrir repositorio usando VSCode
- No canto superior esquerdo, abra o terminal e digite "npm install", deve aparecer uma nova pasta chamada "node_modules" no lado esquerdo da tela
- Digite no terminal o comando "npm run dev", deve aparecer um link em azul aí é só da um clique segurando a tecla CTRL que vai abrir no navegador o site do projeto.

## 3. Fazer o primeiro commit
No GitHub Desktop:

Criar uma branch:
- No canto superior do centro, clique no botão "current branch - main", ao lado do campo de pesquisa clique no botão chamado "new branch"
- coloque o nome da funcionalidade que você vai criar. Ex: lógica do conversor de Cº para Fº; Estilizar página...

Fazer o commit:
- Altere o arquivo desejado
- Volte ao GitHub Desktop, no canto inferior esquerdo, escreva o que vc fez resumidamente (seja claro e breve nas palavras, se precisar escrever mais coloque na descrição, no campo maior)
- Clica no botão azul
- Antes de dar o commit, verificar se vc tá na branch certa > basta apenas olhar canto superior central, "current branch" e embaixo o nome da branch que vc colocou
- No mesmo local onde vc abriu o repositorio no vscode, aparecerá um novo botão em azul que vai subir as alterações pro site do GitHub, só clicar nele

## 4. Fazer Pull Request (PR)
Ainda no GitHub Desktop:

- No mesmo lugar que vc deu o commit, vai aparecer um botão pra fazer a Pull Request, clica nele e você será redirecionado ao site do GitHub pra revisar o que foi feito
- Adicione um titulo e uma descrição do que vc fez ali
- Clica no batão verde, e pronto. Pull Request feita!

O Robson e o Rafael vão analisar seu código, e se tiver sem conflitos com os atuais, a gente vai juntar a branch main, que é o código principal.
