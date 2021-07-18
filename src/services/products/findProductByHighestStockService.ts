import { getCustomRepository } from 'typeorm';
import { Product } from '../../database/entities/Product';
import { ProductsRepository } from '../../repositories/ProductsRepository';

class FindProductByHighestStockService {
  async execute() {
    const productsRepository = getCustomRepository(ProductsRepository);

    const productsExist = await productsRepository.find();
    
    if(!productsExist[0]) {
      throw new Error("Não existem produtos cadastrados no momento");
    }

    const rawProduct = await productsRepository.query(
      `
      SELECT 
        id, nome, fabricante, valor, quantidade_estoque as quantidadeEstoque, 
        created_at as createdAt, updated_at as updatedAt
      from PRODUCTS
      WHERE quantidade_estoque = (
        select MAX(quantidade_estoque)
        from PRODUCTS
      ) 
      `
    )

    const product: Product = rawProduct[0];

    return product;
  }
}

export { FindProductByHighestStockService };