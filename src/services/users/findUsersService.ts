import { getCustomRepository } from "typeorm";
import { User } from "../../database/entities/User";
import { UsersRepository } from "../../repositories/UsersRepository";

class FindUsersService {
  async execute() {
    const usersRepository = getCustomRepository(UsersRepository);

    // Necessário buscar em rawQuery para voltar usuários sem a senha
    const rawUsers = await usersRepository.query(`
      SELECT id, nome, email, created_at as createdAt, updated_at as updatedAt
      from users
    `);

    const users: User[] = rawUsers;
  
    return users;
  }
}

export { FindUsersService };