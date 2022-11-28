import DeleteFolderController from "./DeleteFolder.controller";
import DeleteFolderService from "./DeleteFolder.service";
import { SequelizeFolderRepository } from "../../../repositories/implementations/SequelizeFolder.respository";

const repoFolder = new SequelizeFolderRepository();
const deleteFolderService = new DeleteFolderService(repoFolder);
const deleteFolderController = new DeleteFolderController(deleteFolderService)

export default deleteFolderController