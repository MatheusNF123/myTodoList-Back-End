import { IFolders } from '../../../entities/IFolders';
import CustomError from '../../../Error/customError';
import { IFolderRepository } from './../../../repositories/IFolder.repository';
export default class CreateFolderService{
  private _folderRepo: IFolderRepository

  constructor(repository: IFolderRepository){
    this._folderRepo = repository;
  }

  async create({name}: Omit<IFolders, "id">, id:number):Promise<IFolders>{
    const existFolder = await this._folderRepo.findOne({name, userId: id});
    
    if(existFolder) throw new CustomError("Pasta ja existe", 400)
    
    const folder = await this._folderRepo.create({name, userId: id});
   

    return folder
  }
}