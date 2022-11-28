import { ITasksRepository } from "../../../repositories/ITask.respository";

export default class UpdateInprogressTaskService {
  constructor(private repoTask: ITasksRepository) {}

  async updateProgress(id:number):Promise<void>{
    await this.repoTask.updateProgress(id);
  }
}