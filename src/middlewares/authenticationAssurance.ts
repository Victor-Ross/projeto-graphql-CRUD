import { AuthChecker } from "type-graphql";
import { verify } from 'jsonwebtoken';
import authConfig from '../config/auth';

type Context = {
  token?: string;
}

const authenticationAssurance: AuthChecker<Context> = ({ context }): boolean => {

  const authHeader = context.token;

  if(!authHeader) {
    return false;
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    return !!decoded; // Compara a string, se tiver conteúdo retorna verdadeiro, senão, falso
  } catch {
    return false;
  }
}

export { authenticationAssurance };