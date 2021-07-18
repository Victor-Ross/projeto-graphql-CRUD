import { Arg, Args, Authorized, Int, Mutation, Query, Resolver } from 'type-graphql';
import { Product } from '../database/entities/Product';

import { AlterProductTypes } from '../schemas/ResolverTypes/AlterProductTypes';

import { ListProductsService } from '../services/products/listProductsService';
import { CreateProductsService } from '../services/products/createProductsService';
import { FindProductById } from '../services/products/findProductByIdService';
import { UpdateProductService } from '../services/products/updateProductService';
import { DeleteProductService } from '../services/products/deleteProductService';
import { CountProductsService } from '../services/products/countProductsService';
import { FindProductByLowestStockService } from '../services/products/findProductByLowestStockService';
import { FindProductByHighestStockService } from '../services/products/findProductByHighestStockService';
import { FindProductByStockLowerThanFiveService } from '../services/products/findProductByStockLowerThanFiveService';




@Resolver(Product)
class ProductsController {
  
  @Query(returns => [Product], { name: 'BuscarProdutos' })
  async find() {
    const listProductsService = new ListProductsService();

    const products = await listProductsService.execute();

    return products;
  }

  @Query(returns => Product, { name: 'BuscarProdutoPorId' })
  async findOne(
    @Arg("id") id: string
  ) {
    const findProductById = new FindProductById();

    const product = await findProductById.execute(id);

    console.log(product)
    return product;
  }

  @Query(returns => Int, { name: 'ObterQuantidadeProdutos' })
  async count() {
    const countProductsService = new CountProductsService();

    const productsCount = await countProductsService.execute();

    return productsCount;
  }

  @Query(returns => Product, { name: "ObterProdutoComMenorEstoque" })
  async findByLowestStock() {
    
    const findProductByLowestStockService = new FindProductByLowestStockService();

    const product = await findProductByLowestStockService.execute();

    return product;
  }

  @Query(returns => Product, { name: "ObterProdutoComMaiorEstoque" })
  async findByHighestStock() {

    const findProductByHighestStockService = new FindProductByHighestStockService();

    const product = await findProductByHighestStockService.execute();

    return product;
  }

  @Query(returns => [Product], { name: "ObterProdutosSemEstoque" })
  async findByStockLowerthanFive() {

    const findProductByStockLowerThanFiveService = new FindProductByStockLowerThanFiveService();
  
    const products = await findProductByStockLowerThanFiveService.execute();

    return products;
  }

  @Mutation(returns => Product, { name: 'AdicionarProduto' })
  @Authorized()
  async create(
    @Arg("nome") nome: string,
    @Arg("fabricante") fabricante: string,
    @Arg("quantidadeEstoque") quantidadeEstoque: number,
    @Arg("valor") valor: number
  ) {

    const createProductsService = new CreateProductsService();

    const product = await createProductsService.execute({ 
      nome, 
      fabricante, 
      quantidadeEstoque, 
      valor 
    });

    return product;
  }

  @Mutation(returns => Product, { name: 'AlterarProduto' })
  @Authorized()
  async update(
    @Args() { id, nome, fabricante, quantidadeEstoque, valor }: AlterProductTypes
    
    ) {

    const updateProductService = new UpdateProductService();

    const updatedProduct = updateProductService.execute({ 
      id, 
      nome, 
      fabricante, 
      quantidadeEstoque, 
      valor 
    });

    return updatedProduct;
  }

  @Mutation(returns => Boolean, { name: "DeletarProduto" })
  @Authorized()
  async delete(
    @Arg("id") id: string
  ) {

    const deleteProductService = new DeleteProductService();

    await deleteProductService.execute(id);

    return true;
  }

  
}

export { ProductsController };