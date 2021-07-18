import { getCustomRepository } from 'typeorm';
import { ProductsRepository } from '../repositories/ProductsRepository';

class DeleteProductService {
  async execute(id: string) {
    const productRepository = getCustomRepository(ProductsRepository);

    await productRepository.delete({ id });

    return;
  }
}

export { DeleteProductService };