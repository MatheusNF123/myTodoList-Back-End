import { RequestHandler } from "express";
import UpdateTaskService from "./UpdateTask.service";

export default class UpdateTaskController {
  constructor(private updateServiceTask: UpdateTaskService) {}

  update:RequestHandler = async (req,res) => {
    await this.updateServiceTask.update(req.body);

    res.status(200).send({...req.body});
  }
}