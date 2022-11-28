import { RequestHandler } from "express";
import UpdateInprogressTaskService from "./UpdateInProgressTask.service";

export default class UpdateInprogressTaskController {
  constructor(private updataInProgressServiceTask: UpdateInprogressTaskService) {}

  updateProgress: RequestHandler = async (req,res) => {
    await this.updataInProgressServiceTask.updateProgress(+req.params.id)

    res.status(200).send("Progress atualizado!")
  }
}