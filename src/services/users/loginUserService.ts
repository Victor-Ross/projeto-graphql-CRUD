import { getCustomRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { UsersRepository } from '../../repositories/UsersRepository';
import authConfig from '../../config/auth';


type AuthTypes = {
  email: string;
  senha: string;
}

class LoginUserService {
  async execute({ email, senha }: AuthTypes) {

    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOne({ email });

    if(!user) {
      throw new Error("Combinação email/senha incorreta");
    }

    const passwordMatched = await compare(senha, user.senha);

    if(!passwordMatched) {
      throw new Error("Combinação email/senha incorreta");
    }

    const {secret, expiresIn} = authConfig.jwt;

    const token = sign({}, secret, {
      subject: `"${user.id}"`,
      expiresIn
    });

    return {
      token, 
      user
    }
  }
}

export { LoginUserService };