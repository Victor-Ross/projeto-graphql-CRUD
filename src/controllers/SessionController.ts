import { Resolver, Mutation, Arg } from 'type-graphql';

import { Auth } from '../schemas/Auth';
import { LoginUserService } from '../services/users/loginUserService';



@Resolver(Auth)
class SessionController {

  @Mutation(returns => Auth, { name: 'LogarUsuario' })
  async logar(
    @Arg("email") email: string,
    @Arg("senha") senha: string
    ) {

        const loginUserService = new LoginUserService();

        const auth = loginUserService.execute({ email, senha });

        return auth;
  }
}

export { SessionController };