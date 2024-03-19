## Descrição

API REST para cadastro de Clientes e Fornecedores

## Como iniciar pelo Docker
Deve seguir o passo a passo em sequencia
```bash
# buildar as imagens
$ docker-compose build

# iniciar os conteiners do Postgres, Adminer(gerenciador SQL) e do NestJS
$ docker-compose up -d

# Após os containers do Postgres e do NestJs estarem rodando deve executar o comando a seguir
# para rodar as migrations de criação das tabelas necessárias.
$ npm run migration:run
```

## Infos

Portas
Postgresql: 5432
Adminer:8080
Nest: 3000

## Documentação API

Para acessar a Documentação da API feita com o Swagger pode acessar pelo link http://localhost:3000/api#/ após o container do NestJs estar rodando.



## License

[MIT licensed](LICENSE).