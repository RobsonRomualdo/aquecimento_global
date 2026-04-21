# Regras para commits e branches

### 1. Commits

Se cada um escrever o que quiser, o histórico do Git vira uma bagunça (ex: "ajuste", "arrumando erro", "agora vai").

A ideia é que todo commit comece com um **tipo**:

- `feat:` (adiciona uma funcionalidade nova)
- `fix:` (corrigir um erro/bug)
- `docs:` (mudanças apenas na documentação/README)
- `style:` (mudanças visuais que não afetam a lógica, como CSS)
- `refactor:` (mudar o código sem alterar o que ele faz)

**Exemplo:** > `feat: adiciona lógica de conversão celsius para fahrenheit`

---

### 2. Branches

Para ninguém trabalhar direto na `main` (o que é perigoso!), você deve definir nomes padrão para as "ramificações" do projeto:

- `feature/nome-da-tarefa` (Ex: `feature/home-page`)
- `bugfix/nome-do-erro` (Ex: `bugfix/ajuste-calculo`)

`'feature' é uma nova funcionalidade no código. Use quando for fazer diferença real`

`'bugfix' é correção de erro/bug no código`

### EM BREVE: **ISSUES**