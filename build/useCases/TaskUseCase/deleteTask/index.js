"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SequelizeTask_respository_1 = require("../../../repositories/implementations/SequelizeTask.respository");
const DeleteTask_service_1 = __importDefault(require("./DeleteTask.service"));
const DeleteTask_controller_1 = __importDefault(require("./DeleteTask.controller"));
const sequelizeTaskRepository = new SequelizeTask_respository_1.SequelizeTaskRepository();
const deleteTaskService = new DeleteTask_service_1.default(sequelizeTaskRepository);
const deleteTaskController = new DeleteTask_controller_1.default(deleteTaskService);
exports.default = deleteTaskController;
