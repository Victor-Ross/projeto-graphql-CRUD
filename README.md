# Web API criada com graphQL, type-graphQL, typeorm, mysql, JWT, bcrypt e typescript

## Modo de uso
  - Necessário inserir dados no arquivo ormconfig.js, "type, username, password, host, port e database" para configuração do db
  - Necessário inserir dados no arquivo auth.ts, "secret, expiresIn" dentro de src/config, arquivo usado para JWT
  - **npm install** (Instalar packages do package.json)
  - **yarn typeorm migration:run** (criação das tabelas products e users no banco de dados usando migrations).

  - **yarn dev:server** (executar o projeto)
  - Acessar a url http://localhost:4000
  - Clicar em **"Query your server"**

  ### Observações
  - Para usar rotas autenticadas, será necessário passar no headers em localhost:4000 os valores:  
    * header key = Authorization
    * value = Bearer "valor do token vindo da rota LogarUsuario"

## Rotas e regras de negócio
  - AdicionarProduto
    * Tipo: Mutation
    * Permissão: Somente usuários logados e autenticados
    * Falha: Caso **nome** e **fabricante** já estejam cadastrados no mesmo produto
  - AlterarProduto
    * Tipo: Mutation
    * Permissão: Somente usuários logados e autenticados
    * Falha: Caso **id** do produto não exista no banco de dados
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
    * Falha: Caso **id** do produto não exista no banco de dados;
  - ObterQuantidadeProdutos
    * Tipo: Query
    * Permissões: Todos os usuários
    * Falha: Nenhuma
  - ObterProdutoComMenorEstoque
    * Tipo: Query
    * Permissões: Todos os usuários
    * Falha: Se não houver nenhum produto cadastrado
  - ObterProdutoComMaiorEstoque
    * Tipo: Query
    * Permissões: Todos os usuários
    * Falha: Se não houver nenhum produto cadastrado
  - ObterProdutosSemEstoque
    * Tipo: Query
    * Permissões: Todos os usuários
    * Falha: Se não houver nenhum produto cadastrado
  - CriarUsuario
    * Tipo: Mutation
    * Permissões: Todos os usuários
    * Falha: Nenhuma
  - BuscarUsuarioPorId
    * Tipo: Query
    * Permissões: Todos os usuários
    * Falha: Falha ao passar id do usuário inválido
  - BuscarUsuarios
    * Tipo: Query
    * Permissões: Todos os usuários
    * Falha: nenhuma

  ### Rota de autenticação
  - LogarUsuario
    * Tipo: Mutation
    * Permissões: Todos os usuários cadastrados no banco de dados
    * Falha: email/senha inválidos

