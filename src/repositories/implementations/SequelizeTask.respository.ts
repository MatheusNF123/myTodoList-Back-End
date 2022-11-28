import { ITasks } from './../../entities/ITask';
import { ITasksRepository } from './../ITask.respository';
import { IUsersRepository } from "../IUser.respository";
import TaskModel from '../../database/models/Tasks'
import IUser, { IUserLogin } from "../../entities/IUser";
import CustomError from '../../Error/customError';

export class SequelizeTaskRepository implements ITasksRepository {
  private model = TaskModel

  async findAll(): Promise<ITasks[]> {
      const tasks = await this.model.findAll()

      return tasks
  }

  async create({name,inProgress,descricao,date}: Omit<ITasks, "id">, folderId:number): Promise<ITasks> {
      const user = await this.model.create({ name, date, inProgress, descricao, folderId })

      return user
  }

  async delete(id: number): Promise<void> {
    const tasks = await this.model.findAll()
    const existsTask = tasks.some(task => task.id === id)
    if(!existsTask)throw new CustomError('non-existing task', 404)
    await this.model.destroy({where: {id}})
  }

  async update({name,inProgress,descricao,date, id}:ITasks):Promise<void> {
    const tasks = await this.model.findAll()
    const existsTask = tasks.some(task => task.id === id)
    if(!existsTask)throw new CustomError('non-existing task', 404)
    await this.model.update({ name, inProgress, descricao, date }, { where: { id } })
  }

  async updateProgress(id: number): Promise<void> {
    const task = await this.model.findByPk(id)
    if(!task)throw new CustomError('non-existing task', 404)
      await this.model.update({inProgress: !task?.inProgress}, {where: { id } })
  }
}