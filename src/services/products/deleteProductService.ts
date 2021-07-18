import { getCustomRepository } from 'typeorm';
import { ProductsRepository } from '../../repositories/ProductsRepository';

class DeleteProductService {
  async execute(id: string) {
    const productRepository = getCustomRepository(ProductsRepository);

    const productExists = await productRepository.findOne({ id });
    
    if(!productExists) {
      throw new Error("Produto não encontrado, operação não realizada");
    }

    await productRepository.delete({ id });

    return;
  }
}

export { DeleteProductService };