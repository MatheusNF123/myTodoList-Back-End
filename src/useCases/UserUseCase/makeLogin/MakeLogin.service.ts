import { IUserEmail, IUserLogin, IUserUsername } from '../../../entities/IUser';
import { IUsersRepository } from "../../../repositories/IUser.respository";
import * as bcrypt from 'bcryptjs';
import CustomError from '../../../Error/customError';
import Token from '../../../utils/GenerateToken';
import CreateUserService from '../createUser/CreateUser.service';

export interface ReturnLogin {
  userName: string;
  email: string;
  token: string;

}

export default class MakeLoginService {
  private _userRepository: IUsersRepository

  constructor(userRepository: IUsersRepository) {
    this._userRepository = userRepository;
  }

  public login = async ({email, password}:IUserLogin): Promise<ReturnLogin> => {
    
    const user = await this._userRepository.findOne({ email });
    
    if (!user) throw new CustomError('Incorrect email or password', 401);
    
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) throw new CustomError('Incorrect email or password', 401);
    const token = Token.generateToken({id: user.id, email });
    
    const {username} = user
    return {userName: username, email, token}
  }
}