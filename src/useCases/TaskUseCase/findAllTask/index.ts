import { SequelizeTaskRepository } from "../../../repositories/implementations/SequelizeTask.respository";
import FindAllTaskService from "./FindAllTask.service";
import FindAllTaskController from "./FindAllTask.controller";

const sequelizeTaskRepository = new SequelizeTaskRepository()
const findAllTaskService = new FindAllTaskService(sequelizeTaskRepository)
const findAllTaskController = new FindAllTaskController(findAllTaskService)

export default findAllTaskController