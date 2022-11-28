import { ITasks } from './../../../entities/ITask';
import { ITasksRepository } from "../../../repositories/ITask.respository";

export default class UpdateTaskService {
  constructor(private repoTask: ITasksRepository) {}

  async update(body: ITasks):Promise<void>{
    await this.repoTask.update(body)
  }
}