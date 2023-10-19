Este projeto é uma API Rest em NodeJS e Typescript desenvolvida para fins de aprendizado. 


# Sobre o projeto
.
Tem conceitos como:
- Endpoints
- Controllers
- Banco de dados SQL
- Migrations de banco
- Seeds de banco
- Controle de usuário com email e senha
- Criptografia de senha
- Login de usuários
- Geração e utilização de tokens JWT
- Testes de código



Está é uma API Rest, então não tem interface nesse repositório. Porém, é possível conectar um interface a ele.


# Como rodar 

Você vai precisar do nodens instalado no seu computador para rodar o projeto.

Instale as dependências
```
$ yarn install
```

Configure as variáveis ambiente, crie o arquivo `.env` na pasta raiz do projeto coloque o conteúdo a seguir dentro
```
PORT=3333
NODE_ENV=dev

IS_LOCALHOST=true

ENABLED_CORS=[Lista de endereços separados por ";"]
JWT_SECRET=[Uma string qualquer]
```

Rode o projeto
```
$ yarn start
```
