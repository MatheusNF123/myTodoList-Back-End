import { Request, RequestHandler, Response } from "express";
import CreateFolderService from "./CreateFolder.service";

export default class CreateFolderController{

  constructor(private _serviceFolderCreate: CreateFolderService){}

  create = async (req: Request, res: Response) => {   
    console.log(req.user.id);
    
    const folder = await this._serviceFolderCreate.create(req.body, req.user.id)

    res.status(201).json(folder)
  }
}