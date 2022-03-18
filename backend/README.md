# Clickbeard Backend

## Overview do projeto

Este backend foi desenvolvido utilizando:

-   Node.js
-   `typeORM` para integração com o banco de dados.
-   `@apollo-server` para criação do servidor.
-   `node-jose` para encryptamento de dados.

Todas as rotas que pertencem a parte privada da aplicação precisam de uma autênticação via token através dos headers.

## Instalação

Para rodar o projeto separadamente:

-   Criar um arquivo `.env` em `./backend` seguinto o exemplo em `./backend/.env.example.`

*   Se necessário, as configurações da conexão com o banco de dados estão em `./backend/ormconfig.json`.

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

Deve encontrar o projeto rodando em `localhost:4000`

## Passo a passo Apollo Server Client

Ao acessar `localhost:4000` você encontrará o client do `apollo-server`.\
Esse client vai te fornecer uma documentação das queries disponíveis no servidor.\
No client, na parte esqueda da tela você deve encontrar o menu de navegação, vamos acessar o `schema` do nosso servidor clicando no icone `schema diff`:

![example](https://res.cloudinary.com/weex/image/upload/v1647573405/Screenshot_from_2022-03-18_00-16-13_gsijkm.png)

Ao clicar neste icone, você terá a acesso à todo o schema junto com todas as queries e mutations disponíveis no servidor, junto de seus repectivos retornos.\
Para montar nossas queries, vamos agora acessar o `explorer`.

![example](https://res.cloudinary.com/weex/image/upload/v1647573313/Screenshot_from_2022-03-18_00-13-01_t7wt4n.png)

Nesse icone, você terá acesso ao `explorer`, aqui você pode montar as queries que quiser com a ajuda do client.\
No explorer você verá este header:

![example](https://res.cloudinary.com/weex/image/upload/v1647573675/Screenshot_from_2022-03-18_00-21-05_uousuh.png)

ao clicar em `Root` você será redirecionado para a raiz de todas as queries com acesso à todas as queries disponiveis.

## Criando um usuário Administrador

Para criar um usuário adiministrador vamos precisar executar uma mutation no nosso servidor.\
Mutations são operações que vão ocasionar em alguma mudança na base de dados, de forma semelhante a um `POST`, enquanto queries são apenas formas de pedir dados para o servidor, semelhante a um `GET`.\
Para exemplificar melhor, vamos criar um usuário adm.\
Após ter acessado a aba Root, clique no icone de + da mutation:

![example](https://res.cloudinary.com/weex/image/upload/v1647573939/Screenshot_from_2022-03-18_00-25-28_ycwden.png)

agora vamos selecionar a mutation que queremos executar, neste caso `registerAdmUser`:

![example](https://res.cloudinary.com/weex/image/upload/v1647574040/Screenshot_from_2022-03-18_00-27-09_pi7wzq.png)

perceba que conforme fomos filtrando a mutation que queriamos executar o explorer foi criando automáticamente a estrutura para nós:

![example](https://res.cloudinary.com/weex/image/upload/v1647574236/Screenshot_from_2022-03-18_00-30-23_kstoz6.png)

No inicio dessa estrutura, temos a definição de todos os parâmetros que essa mutation precisa receber junto com o tipo de dado de ele deve ser, em baixo, estamos repassando os dados para a mutation em sí. Para definir os valores dessas variáveis, vamos utilizar o campo `Variables` na parte inferior da tela, por exemplo, vamos registrar o meu usuário admim:

![example](https://res.cloudinary.com/weex/image/upload/v1647574449/Screenshot_from_2022-03-18_00-33-54_yg1sep.png)

algumas queries precisam de autenticação, para isso, vamos acessar a outra aba dessa parte, em `Headers`, e vamos adicionar um novo header `Authentication` e vamos inserir o nosso token:

![example](https://res.cloudinary.com/weex/image/upload/v1647574554/Screenshot_from_2022-03-18_00-35-41_kwcwg4.png)

com isso feito, podemos agora escolher quais dados queremos receber desta rota, no editor, dentro do escopo da requisição, ao apertar `ctrl + espaço`, vamos ter uma lista de todas as opções disponívels para essa mutation, com isso basta apenas escolher quais dados queremos e executa-lá:

![example](https://res.cloudinary.com/weex/image/upload/v1647574734/Screenshot_from_2022-03-18_00-38-36_whekbv.png)
