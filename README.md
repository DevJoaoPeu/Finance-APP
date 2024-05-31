# Finance-APP

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/DevJoaoPeu/Finance-APP/blob/main/LICENSE)

## Sobre o Projeto

A Finance-APP é uma API desenvolvida em Node.js que permite o cadastro de usuários e a gestão de transações financeiras. Os usuários podem registrar diferentes tipos de transações, como investimentos, ganhos e gastos. O banco de dados utilizado é o PostgreSQL, rodando dentro de um contêiner Docker.

## Funcionalidades

- Cadastro de usuários
- Registro de transações financeiras
  - Tipos de transações: Investimento, Ganho, Gasto
- Consulta de transações por usuário

## Pré-requisitos

Antes de começar, certifique-se de ter os seguintes itens instalados:

- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)

## Instalação

1. Clone o repositório:

    ```sh
    git clone https://github.com/DevJoaoPeu/Finance-APP.git
    cd Finance-APP
    ```

2. Instale as dependências:

    ```sh
    npm install
    ```

3. Configure as variáveis de ambiente:

    Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:

    ```env
    DB_HOST=localhost
    DB_PORT=5432
    DB_USER=your_postgres_user
    DB_PASSWORD=your_postgres_password
    DB_NAME=your_database_name
    ```

4. Inicie o contêiner Docker com o PostgreSQL:

    ```sh
    docker-compose up -d
    ```

5. Inicie a aplicação:

    ```sh
    npm start
    ```

## Uso

A API estará disponível em `http://localhost:3000`. Você pode usar ferramentas como [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/) para testar os endpoints.

## Endpoints

### Usuários

- **Criar Usuário**
  - **POST** `/api/users`
  - **Body**: `{ "first_name": "Nome", "last_name": "Surname","email":"email@example.com ,"password": "senha123" }`

- **Listar Usuários**
  - **GET** `/api/users/:userId`

### Transações

- **Criar Transação**
  - **POST** `/api/transactions`
  - **Body**: `{ "userId": 1, "type": "investment", "amount": 1000.00, "date": "data", "name":"name_transaction" }`

- **Listar Transações por Usuário**
  - **GET** `/api/transactions/:userId`

## Tecnologias

- **Node.js**: Ambiente de execução JavaScript no servidor
- **Express**: Framework web para Node.js
- **PostgreSQL**: Banco de dados relacional
- **Docker**: Plataforma para desenvolvimento, envio e execução de aplicações em contêineres
- **SQL**: Linguagem de consulta estruturada para interação com o banco de dados

## Contribuição

Contribuições são bem-vindas! Se você tem alguma ideia para melhorar o projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request.

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um pull request

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](https://github.com/DevJoaoPeu/Finance-APP/blob/main/LICENSE) para detalhes.

## Contato

João Pedro - [joaopedroprog.contato@gmail.com]

Link do projeto: [https://github.com/DevJoaoPeu/Finance-APP](https://github.com/DevJoaoPeu/Finance-APP)
