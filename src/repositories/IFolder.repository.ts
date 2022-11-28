import { IFolders } from "../entities/IFolders";

export interface IFolderRepository {
  findAll(id:number):Promise<IFolders[]>;
  create(folder: Omit<IFolders,"id">): Promise<IFolders>;
  delete(id:number): Promise<void>;
  findOne(name: Omit<IFolders,"id">): Promise<IFolders | null>;
}