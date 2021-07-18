import { Repository, EntityRepository } from 'typeorm';
import { Product } from '../database/entities/Product';

@EntityRepository(Product)
class ProductsRepository extends Repository<Product> {

}

export { ProductsRepository };