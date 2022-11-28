import { RequestHandler } from "express";
import GetllAllFoldersService from "./GetAllFolders.service";

export default class GetllAllFoldersController {
  constructor(private serviceFindAllFolders: GetllAllFoldersService) {}

   findAll: RequestHandler = async (req, res):Promise<void> => {
    const {id} = req.user
    const folders = await this.serviceFindAllFolders.findAll(id);

    res.status(200).send(folders)
  }
}