import FolderModel from '../../database/models/Folders'
import { IFolderRepository } from "../IFolder.repository";
import { IFolders } from "../../entities/IFolders";
import Tasks from '../../database/models/Tasks';

export class SequelizeFolderRepository implements IFolderRepository {
  private model = FolderModel

  async findAll(id:number): Promise<IFolders[]> {
      const folders = await this.model.findAll({where: {userId: id},
        include: {model: Tasks, as: 'tasks'}
      })

      return folders
  }

  async delete(id:number): Promise<void> {
    await this.model.destroy({where: {id}})
  }

  async create({name, userId}: Omit<IFolders, "id">): Promise<IFolders> {
    
    const user = await this.model.create({name, userId})

      return user
  }

  async findOne({name, userId}: Omit<IFolders,"id">): Promise<IFolders | null> {
    const folder = await this.model.findOne({where: {name, user_id: userId}}) 
    
    return folder
  }
}