import express from "express";
import validation from "../middleware/MiddlewareValidations";
import createTaskController from "../useCases/TaskUseCase/createTask";
import deleteTaskController from "../useCases/TaskUseCase/deleteTask";
import findAllTaskController from "../useCases/TaskUseCase/findAllTask";
import updateInprogressTaskController from "../useCases/TaskUseCase/updateProgress";
import updateTaskController from "../useCases/TaskUseCase/updateTask";
import Token from "../utils/GenerateToken";
import { schemaValidateCreateTask } from "../validation/schema/schemas";

const router = express()

const validateCreateTask = validation(schemaValidateCreateTask)
const validateUpdateTask = validation(schemaValidateCreateTask)

router.post("/task/folder/:id", Token.authToken,validateCreateTask, createTaskController.create)
router.delete("/task/:id", deleteTaskController.delete)
router.get("/task", findAllTaskController.findAll)
router.put("/task", validateUpdateTask, updateTaskController.update)
router.patch("/task/:id/inProgress", updateInprogressTaskController.updateProgress)

export default router