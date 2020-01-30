<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<h3 align="center">
  Desafio 1: Conceitos do NodeJS
</h3>

## :rocket: Sobre o desafio

Foi criada uma aplicação para armazenar projetos e suas tarefas do zero utilizando [Express](https://expressjs.com/pt-br/).

### Rotas

> Projects

- `POST /projects`: A rota deve receber `id` e `title` dentro do corpo e cadastrar um novo projeto dentro de um array no seguinte formato: `{ id: "1", title: 'Novo projeto', tasks: [] }`; Certifique-se de enviar tanto o ID quanto o título do projeto no formato string com aspas duplas.

- `GET /projects`: Rota que lista todos projetos e suas tarefas;

- `PUT /projects/:id`: A rota deve alterar apenas o título do projeto com o `id` presente nos parâmetros da rota;

- `DELETE /projects/:id`: A rota deve deletar o projeto com o `id` presente nos parâmetros da rota;

> Tasks

- `POST /projects/:id/tasks`: A rota deve receber um campo `title` e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do `id` presente nos parâmetros da rota;

- `PUT /projects/:id/tasks/:task`: A rota deve alterar apenas o título da tarefa com o `id` do projeto e a `task` presente nos parâmetros da rota;

- `DELETE /projects/:id`: A rota deve deletar a tarefa com o `id` do projeto e a `task` presente nos parâmetros da rota;

### Middlewares

- O middleware  checkProject recebe o ID do projeto nos parâmetros da URL e verifica se o projeto com aquele ID existe. Se não existir retorna um erro, caso contrário permita a requisição continua normalmente;

- O middleware global logRequests imprime uma contagem de quantas requisições foram feitas na aplicação até então;
