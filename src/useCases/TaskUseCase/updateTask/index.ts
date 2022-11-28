import { SequelizeTaskRepository } from "../../../repositories/implementations/SequelizeTask.respository";
import UpdateTaskService from "./UpdateTask.service";
import UpdateTaskController from "./UpdateTask.controller";

const sequelizeTaskRepository = new SequelizeTaskRepository();
const updateTaskService = new UpdateTaskService(sequelizeTaskRepository);
const updateTaskController = new UpdateTaskController(updateTaskService);

export default updateTaskController