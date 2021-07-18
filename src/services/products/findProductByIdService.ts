import { getCustomRepository } from 'typeorm';
import { ProductsRepository } from '../../repositories/ProductsRepository';

class FindProductById {
  async execute(id: string) {
    const productsRepository = getCustomRepository(ProductsRepository);

    const product = await productsRepository.findOne({ id });

    if(!product) {
      throw new Error("Produto não encontrado");
    }

    return product;
  }
}

export { FindProductById };