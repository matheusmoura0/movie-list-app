# Movie List App

## Descrição

O **Movie List App** é uma aplicação web que permite aos usuários pesquisar filmes, adicioná-los a uma lista de favoritos e compartilhar essa lista com outras pessoas através de um link exclusivo. A aplicação utiliza uma arquitetura MSC (Model-Service-Controller) e foi desenvolvida com Node.js, Express, React e Sequelize, utilizando PostgreSQL como banco de dados.

## Funcionalidades

- **Pesquisa de Filmes**: Os usuários podem pesquisar por filmes usando a API do The Movie Database (TMDb).
- **Gerenciamento de Favoritos**: Filmes podem ser adicionados e removidos da lista de favoritos.
- **Compartilhamento de Favoritos**: Geração de links compartilháveis para listas de favoritos.
- **Visualização de Favoritos Compartilhados**: Qualquer pessoa com o link pode visualizar os filmes favoritos compartilhados.

## Tecnologias Utilizadas

- **Frontend**:
    - React
    - Axios
    - CSS

- **Backend**:
    - Node.js
    - Express
    - Sequelize
    - SQLite (para desenvolvimento)

- **Infraestrutura**:
    - Docker
    - Heroku (para o deploy do frontend)
    - Heroku Postgres (para o deploy do backend)

## Pré-requisitos

- Node.js v14+
- Docker (opcional para desenvolvimento local com containers)
- Conta no Heroku (para deploy)

## Instalação e Uso

### Clonando o Repositório

```bash
git clone https://github.com/seu-usuario/movie-list-app.git
cd movie-list-app
```
## Configuração do Backend

### Instalação das dependências:

```bash
cd backend
npm install
```

### Configuração do Frontend

### Instalação das dependências:

```bash
cd frontend
npm install
```

### Rodando com Docker

```bash
docker-compose up
```

### Criando variáveis de ambiente

Crie um arquivo `.env` na pasta `backend` com as seguintes variáveis de ambiente:

```env
# Porta onde a aplicação será executada
PORT=3000

# Chave da API do The Movie Database (TMDb)
# Substitua 'your_api_key_here' pela sua chave real da API TMDb
TMDB_API_KEY=your_api_key_here
```

## Documentação da API

Este projeto utiliza o Swagger para documentar as rotas da API. A documentação detalhada das rotas e dos modelos de dados está disponível diretamente na aplicação.

### Acessando a Documentação

Depois de iniciar o servidor backend, você pode acessar a documentação da API Swagger navegando até:



### Rotas Documentadas

As seguintes rotas estão documentadas no Swagger:

- **/favorites**: Gerenciamento de filmes favoritos
  - `POST /favorites`: Adiciona um filme aos favoritos
  - `GET /favorites`: Obtém a lista de filmes favoritos
  - `DELETE /favorites/{id}`: Remove um filme dos favoritos

- **/movies/search**: Busca de filmes na API externa
  - `GET /movies/search`: Busca por filmes com base em uma query

- **/shared**: Gerenciamento de links compartilhados
  - `POST /shared`: Cria um link compartilhado para uma lista de filmes favoritos
  - `GET /shared/{uuid}`: Obtém os filmes favoritos vinculados a um link compartilhado

### Como adicionar novas rotas ao Swagger

Para adicionar novas rotas à documentação Swagger, siga os passos abaixo:

1. No arquivo de rotas (`.js`), adicione a anotação `@swagger` antes da rota que você deseja documentar.
2. Defina as propriedades necessárias como `summary`, `tags`, `requestBody`, `responses`, entre outras.
3. A documentação será automaticamente gerada e estará disponível na interface do Swagger.

### Exemplo de Anotação

```javascript
/**
 * @swagger
 * /favorites:
 *   post:
 *     summary: Adiciona um filme aos favoritos
 *     tags: [Favorites]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               movie_id:
 *                 type: integer
 *               title:
 *                 type: string
 *               vote_average:
 *                 type: float
 *               poster_path:
 *                 type: string
 *               release_date:
 *                 type: string
 *               overview:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Filme adicionado aos favoritos com sucesso
 *       '400':
 *         description: Requisição inválida
 *       '500':
 *         description: Erro interno do servidor
 */


