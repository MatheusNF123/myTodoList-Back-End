import { IUserRegister } from './../../../entities/IUser';
import IUser from '../../../entities/IUser';
import CustomError from '../../../Error/customError';
import { IUsersRepository } from './../../../repositories/IUser.respository';
import * as bcrypt from 'bcryptjs';
import Token from '../../../utils/GenerateToken';
import { ReturnLogin } from '../makeLogin/MakeLogin.service';

export default class CreateUserService {
  private userRepo: IUsersRepository

  constructor(_userRepo: IUsersRepository) {
    this.userRepo = _userRepo;
  }

  async create({username, email, password}: Omit<IUser, 'id'>): Promise<ReturnLogin | void> {
    const verifyExistsUser = await this.userRepo.findOne({ email });
    
    if (verifyExistsUser) throw new CustomError('Email já cadastrado', 400);
    
    const hashPassord = await bcrypt.hash(password, 10);

    const user = await this.userRepo.create({username, email, password: hashPassord})

    const token = Token.generateToken({id: user.id, email: user.email });    

    return {userName: user.username, email: user.email, token}
  }

}