import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../../repositories/UsersRepository';
import { hash } from 'bcryptjs';


type UserType = {
  nome: string;
  email: string;
  senha: string;
  admin?: boolean;
}

class CreateUsersService {
  async execute({ nome, email, senha, admin = false }: UserType) {

    const usersRepository = getCustomRepository(UsersRepository);

    const userAlreadyExists = await usersRepository.findOne({ email });

    if(userAlreadyExists) {
      throw new Error('Falha na autenticação, dados incorretos');
    }

    const hashedPassword = await hash(senha, 8);


    const user = usersRepository.create({
      nome, email, senha: hashedPassword, admin
    });

    usersRepository.save(user);

    return user;
  }
}

export { CreateUsersService };