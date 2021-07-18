import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../../repositories/UsersRepository";

class FindUserByIdService {
  async execute(id: string) {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOne({ id });

    if(!user) {
      throw new Error('Usuario não encontrado');
    }

    return user;
  }
}

export { FindUserByIdService };