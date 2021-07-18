import { getCustomRepository } from 'typeorm';
import { ProductsRepository } from '../../repositories/ProductsRepository';


type ProductsType = {
  nome: string;
  fabricante: string;
  quantidadeEstoque: number;
  valor: number;
}

class CreateProductsService {
  async execute({ nome, fabricante, quantidadeEstoque, valor }: ProductsType) {
    
    const productsRepository = getCustomRepository(ProductsRepository);

    const productAlreadyExists = await productsRepository
      .createQueryBuilder("product")
      .where("BINARY product.nome = :nome", { nome })
      .andWhere("BINARY product.fabricante = :fabricante", { fabricante })
      .getOne();

    if(productAlreadyExists) {
      throw new Error('Produto de mesmo nome e marca já existente');
    }

    const product = productsRepository.create({
      nome, fabricante, quantidadeEstoque, valor
    });

    await productsRepository.save(product);

    return product;
  }
}

export { CreateProductsService };