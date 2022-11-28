import { ITasksRepository } from "../../../repositories/ITask.respository";

export default class FindAllTaskService {
  constructor(private repoTask: ITasksRepository) {}

  async findAll() {
    const tasks = await this.repoTask.findAll();

    return tasks
  }
}