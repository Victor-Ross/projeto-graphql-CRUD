import { getCustomRepository } from 'typeorm';
import { ProductsRepository } from '../repositories/ProductsRepository';


type ProductType = {
  id: string,
  nome?: string;
  fabricante?: string;
  valor?: number;
  quantidadeEstoque?: number;
}

class UpdateProductService {
  async execute({ id, nome, fabricante, valor, quantidadeEstoque }: ProductType) {
    const productsRepository = getCustomRepository(ProductsRepository);

    const product = await productsRepository.findOne({ id });

    if(!product) {
      throw new Error("Produto não cadastrado");
    }

    const updatedProduct = productsRepository.merge(product, { nome, fabricante, valor, quantidadeEstoque });
    
    await productsRepository.save(updatedProduct);

    return updatedProduct;
  }
}

export { UpdateProductService };