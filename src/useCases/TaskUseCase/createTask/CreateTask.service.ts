import { IFolderRepository } from './../../../repositories/IFolder.repository';
import { ITasks } from './../../../entities/ITask';
import { ITasksRepository } from './../../../repositories/ITask.respository';
import CustomError from '../../../Error/customError';
export default class CreateTaskService {
  constructor(
    private repoTask: ITasksRepository,
    private repoFolder: IFolderRepository
    ) {}

  async create(infoTask: Omit<ITasks, "id">, folderId:number, userId:number){
    const folder = await this.repoFolder.findAll(userId)
    const hasPermission = folder.find((folder) => folder.id === folderId)
    if(!hasPermission) throw new CustomError("non-existent folder", 400)
    if(hasPermission.userId !== userId) throw new CustomError("don't have permission", 400)
    
    
    const task = await this.repoTask.create(infoTask, folderId);
    return task
  }

 
}