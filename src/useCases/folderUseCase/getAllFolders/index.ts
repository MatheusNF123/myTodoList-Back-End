import { SequelizeFolderRepository } from "../../../repositories/implementations/SequelizeFolder.respository";
import GetllAllFoldersService from "./GetAllFolders.service";
import GetllAllFoldersController from "./GetAllFolders.controller";

const sequelizeFolderRepository = new SequelizeFolderRepository();
const getllAllFoldersService = new GetllAllFoldersService(sequelizeFolderRepository)
const getllAllFoldersController = new GetllAllFoldersController(getllAllFoldersService)

export default getllAllFoldersController