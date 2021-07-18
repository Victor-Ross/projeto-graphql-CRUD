import { getCustomRepository } from 'typeorm';
import { ProductsRepository } from '../repositories/ProductsRepository';

class CountProductsService {
  async execute() {
    const productsRepository = getCustomRepository(ProductsRepository);

    const products = await productsRepository.count();

    return products;
  }
}

export { CountProductsService };