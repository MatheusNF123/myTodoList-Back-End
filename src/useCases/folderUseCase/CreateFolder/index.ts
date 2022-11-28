import CreateFolderController from "./CreateFolder.controller";
import CreateFolderService from "./CreateFolder.service";
import { SequelizeFolderRepository } from "../../../repositories/implementations/SequelizeFolder.respository";

const repoFolder = new SequelizeFolderRepository();
const createFolderService = new CreateFolderService(repoFolder);
const createFolderController = new CreateFolderController(createFolderService)

export default createFolderController