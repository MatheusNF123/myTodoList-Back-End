import { IUserEmail } from './../../entities/IUser';
import { IUsersRepository } from "../IUser.respository";
import UserModel from '../../database/models/Users'
import IUser, { IUserLogin } from "../../entities/IUser";

export class SequelizeUserRepository implements IUsersRepository {
  private model = UserModel

  async findOne({email}: IUserEmail): Promise<IUser | null> {
      const user = await this.model.findOne({where: {email}})

      return user as IUser | null
  }

  async create(infoUser: Omit<IUser, "id">): Promise<IUser> {
      const user = await this.model.create(infoUser)

      return user
  }
}