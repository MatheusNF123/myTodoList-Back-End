import { ITasksRepository } from './../../../repositories/ITask.respository';
export default class DeleteTaskService {
  constructor(private repoTask: ITasksRepository) {}

  delete = async (id: number): Promise<void> => {
    await this.repoTask.delete(id);
  }
}