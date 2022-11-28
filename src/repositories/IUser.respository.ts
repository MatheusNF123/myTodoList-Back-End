import IUser, { IUserLogin } from "../entities/IUser";

export interface IUsersRepository {
  findOne(login: Omit<IUserLogin, "password">): Promise<IUser | null>;
  create(IUser: Omit<IUser, 'id'>):Promise<IUser>;
}