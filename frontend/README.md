# ClickBeard Frontend

## Overview do projeto

Este frontend foi desenvolvido utilizando:

-   React
-   `easy-peasy` para gerenciamento da store
-   `react-hook-form` para gerenciamento de formulários
-   `@apollo-client`para gerenciamento das requisições GraphQL.
-   contextAPI para criação de hooks personalizados

Todas as páginas do app estão responsivas até 280px de largura.\
Também foram adicionados alguns testes unitários para garantir o funcionamento de alguns componentes chaves na aplicação, você pode executar `yarn test` para ter uma visão de todos os tesdes criados.

## Instalação

Para rodar o projeto separadamente:

```bash
    yarn

    # ou

    npm install
```

```bash
    yarn start

    # ou

    npm start
```

Deve encontrar o projeto rodando em `localhost:3000`

## Criando usuários Administradores

Para criar um usuário adm, você deve executar a mutation `registerAdmUser` pelo client do Apollo.\
No README do backend existe um passo a passo explicando como o client do Apollo funciona e como executar as queries através dele.
