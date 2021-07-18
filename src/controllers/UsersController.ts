import { Resolver, Query, Mutation, Arg, Args } from 'type-graphql';

import { CreateUserTypes } from '../schemas/ResolverTypes/CreateUserTypes';

import { User } from '../database/entities/User';
import { CreateUsersService } from '../services/users/createUsersService';
import { FindUsersService } from '../services/users/findUsersService';
import { FindUserByIdService } from '../services/users/findUserByIdService';


@Resolver(User)
class UsersController {

  @Query(returns => [User], { name: 'BuscarUsuarios' })
  async find() {
    const findUsersService = new FindUsersService();

    const users = findUsersService.execute();

    return users;
  }

  @Query(returns => User, { name: 'BuscarUsuarioPorId' })
  async findOne(
    @Arg("id") id: string
  ) {

    const findUserByIdService = new FindUserByIdService();

    const user = findUserByIdService.execute(id);

    return user;
  }

  @Mutation(returns => User, { name: 'CriarUsuario' })
  async create(
    @Args() { nome, email, senha, admin }: CreateUserTypes) {

    const createUsersService = new CreateUsersService();

    const user = await createUsersService.execute({ nome, email, senha, admin });

    return user;
  }


}

export { UsersController };