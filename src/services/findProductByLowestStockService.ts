import { getCustomRepository } from 'typeorm';
import { Product } from '../database/entities/Product';
import { ProductsRepository } from '../repositories/ProductsRepository';

class FindProductByLowestStockService {
  async execute() {
    const productsRepository = getCustomRepository(ProductsRepository);

    const rawProduct = await productsRepository.query(
      `
      SELECT 
        id, nome, fabricante, valor, quantidade_estoque as quantidadeEstoque, 
        created_at as createdAt, updated_at as updatedAt
      from PRODUCTS
      WHERE quantidade_estoque = (
        select MIN(quantidade_estoque)
        from PRODUCTS
      );
      `
    )

    const product: Product = rawProduct[0];

    return product;
  }
}

export { FindProductByLowestStockService };