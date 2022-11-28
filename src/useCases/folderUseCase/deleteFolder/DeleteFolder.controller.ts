import { RequestHandler } from "express";
import DeleteFolderService from "./DeleteFolder.service";

export default class DeleteFolderController{
  constructor(private _serviceFolderDelete: DeleteFolderService){}

  delete: RequestHandler = async (req, res) => {
    const {id} = req.params;
    await this._serviceFolderDelete.delete(+id)

    res.status(200).json({message: "Folder deleted successfully"});
  }
}