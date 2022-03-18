# Clickbeard

Dentro de cada diretório deste projeto, você vai encontrar um README explicando como cada parte foi construída, quais tecnologias foram útilizadas e uma documentação de como utilizar esta aplicação.

## Subindo ambiente com Docker

Para executar este projeto de forma simples e rápida, foi adicionado um arquivo docker-compose.yml para poder rodar todo o ambiente de forma fácil:

-   Criar um arquivo .env em ./backend seguinto o exemplo em ./backend/.env.example.

Então execute o docker para levantar todos os containers de uma única vez:

```bash
    docker-compose up
```

Se ao rodar o container você obtiver uma mensagem de erro, tente parar os containers e executa-los novamente, se o erro persistir, execute os serviços separadamente.

## Subindo ambientes separadamente

Caso não possua docker, também é possível rodar os projetos individualmente, no README de cada diretório existe uma descrição detalhada.
