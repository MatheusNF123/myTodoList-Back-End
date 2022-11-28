import { RequestHandler } from "express";
import DeleteTaskService from "./DeleteTask.service";

export default class DeleteTaskController{
  constructor(private deleteServiceTask: DeleteTaskService) {}

 delete: RequestHandler = async (req, res) => {
    await this.deleteServiceTask.delete(+req.params.id)

    res.status(204).send("tarefa deletada")
  }
}