import { RequestHandler } from "express";
import FindAllTaskService from "./FindAllTask.service";

export default class FindAllTaskController {
  constructor(private findAllServiceTask: FindAllTaskService) {}

  findAll:RequestHandler = async(_req,res) => {
    const tasks = this.findAllServiceTask.findAll();

    res.status(200).json(tasks)
  }
}