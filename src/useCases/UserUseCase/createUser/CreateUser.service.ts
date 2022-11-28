import IUser from '../../../entities/IUser';
import CustomError from '../../../Error/customError';
import { IUsersRepository } from './../../../repositories/IUser.respository';
import * as bcrypt from 'bcryptjs';

export default class CreateUserService {
  private userRepo: IUsersRepository

  constructor(_userRepo: IUsersRepository) {
    this.userRepo = _userRepo;
  }

  async create({username, email, password}: Omit<IUser, 'id'>): Promise<IUser | void> {
    const verifyExistsUser = await this.userRepo.findOne({ email });
    
    if (verifyExistsUser) throw new CustomError('Usuario ja existe', 400);
    
    const hashPassord = await bcrypt.hash(password, 10);

    const user = await this.userRepo.create({username, email, password: hashPassord})

    return user
  }

}