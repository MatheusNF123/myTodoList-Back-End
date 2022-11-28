import { ITasks } from "../entities/ITask";

export interface ITasksRepository {
  findAll(): Promise<ITasks[]>;
  create(infosTask: Omit<ITasks, 'id'>, folderId:number):Promise<ITasks>;
  update(infosTask:ITasks): Promise<void>;
  updateProgress(id:number): Promise<void>;
  delete(id:number): Promise<void>;
}