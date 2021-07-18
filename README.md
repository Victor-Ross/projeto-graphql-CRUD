# Web API criada com graphQL, type-graphQL, typeorm, mysql e typescript

## Modo de uso
  - **yarn typeorm migration:run** (criação das tabelas products e users no banco de dados).

  - **yarn dev:server** (executar o projeto)
  - Acessar a url http://localhost:4000
  - Clicar em **"Query your server"**

## Rotas e regras de negócio
  - AdicionarProduto
    * Tipo: Mutation
    * Permissão: Somente usuários admin e autenticados.
    * Falha: Caso **nome** e **fabricante** já estejam cadastrados no mesmo produto
  - AlterarProduto
    * Tipo: Mutation
    * Permissão: Somente usuários admin e autenticados
    * Falha: Caso **id** do produto não exista no banco de dados.
  - BuscarProdutos
    * Tipo: Query
    * Permissão: Todos os usuários
    * Falha: Nenhuma
  - BuscarProdutosPorId
    * Tipo: Query
    * Permissão: Todos os usuários
    * Falha: Caso **id** do produto não exista no banco de dados
  - DeletarProduto
    * Tipo: Mutation
    * Permissão: Somente usuários logados e autenticados
    
    