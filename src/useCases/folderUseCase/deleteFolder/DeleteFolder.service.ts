import { IFolderRepository } from "../../../repositories/IFolder.repository";

export default class DeleteFolderService{
  private _folderRepo: IFolderRepository

  constructor(repository: IFolderRepository){
    this._folderRepo = repository;
  }

  async delete(id:number):Promise<void>{
    this._folderRepo.delete(id);
  }
}