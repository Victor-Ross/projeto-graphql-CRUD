import { getCustomRepository } from 'typeorm';
import { Product } from '../database/entities/Product';
import { ProductsRepository } from '../repositories/ProductsRepository';

class FindProductByStockLowerThanFiveService {
  async execute() {
    const productRepository = getCustomRepository(ProductsRepository);

    const rawProducts = await productRepository.query(`
      SELECT id, nome, fabricante, valor, quantidade_estoque as quantidadeEstoque,
      created_at as createdAt, updated_at as updatedAt
      FROM products
      WHERE quantidade_estoque < 5
    `);

    const products: Product[] = rawProducts;

    return products;
  }
}

export { FindProductByStockLowerThanFiveService };