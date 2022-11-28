import CreateTaskController from "./CreateTask.controller";
import CreateTaskService from "./CreateTask.service";
import { SequelizeTaskRepository } from "../../../repositories/implementations/SequelizeTask.respository";
import { SequelizeFolderRepository } from './../../../repositories/implementations/SequelizeFolder.respository';


const sequelizeTaskRepository = new SequelizeTaskRepository();
const sequelizeFolderRepository = new SequelizeFolderRepository();
const createTaskService = new CreateTaskService(sequelizeTaskRepository, sequelizeFolderRepository);
const createTaskController = new CreateTaskController(createTaskService);

export default createTaskController;