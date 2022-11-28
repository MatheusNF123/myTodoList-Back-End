import { RequestHandler } from "express"
import CreateTaskService from "./CreateTask.service"

export default class CreateTaskController{
  constructor(private createServiceTask: CreateTaskService) {}

  create:RequestHandler = async (req,res) => {
    
    const {id} = req.params
    const task = await this.createServiceTask.create(req.body, +id, +req.user.id)

    res.status(201).json(task)
  }

 
}