import { SequelizeTaskRepository } from "../../../repositories/implementations/SequelizeTask.respository";
import DeleteTaskService from "./DeleteTask.service";
import DeleteTaskController from "./DeleteTask.controller";

const sequelizeTaskRepository = new SequelizeTaskRepository();
const deleteTaskService = new DeleteTaskService(sequelizeTaskRepository);
const deleteTaskController = new DeleteTaskController(deleteTaskService);

export default deleteTaskController;