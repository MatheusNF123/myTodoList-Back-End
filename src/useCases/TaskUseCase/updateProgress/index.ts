import { SequelizeTaskRepository } from "../../../repositories/implementations/SequelizeTask.respository";
import UpdateInprogressTaskService from "./UpdateInProgressTask.service";
import UpdateInprogressTaskController from "./UpdateInProgressTask.controller";

const sequelizeTaskRepository = new SequelizeTaskRepository();
const updateInprogressTaskService = new UpdateInprogressTaskService(sequelizeTaskRepository);
const updateInprogressTaskController = new UpdateInprogressTaskController(updateInprogressTaskService);

export default updateInprogressTaskController