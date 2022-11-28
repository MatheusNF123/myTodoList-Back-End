"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SequelizeTask_respository_1 = require("../../../repositories/implementations/SequelizeTask.respository");
const UpdateTask_service_1 = __importDefault(require("./UpdateTask.service"));
const UpdateTask_controller_1 = __importDefault(require("./UpdateTask.controller"));
const sequelizeTaskRepository = new SequelizeTask_respository_1.SequelizeTaskRepository();
const updateTaskService = new UpdateTask_service_1.default(sequelizeTaskRepository);
const updateTaskController = new UpdateTask_controller_1.default(updateTaskService);
exports.default = updateTaskController;
