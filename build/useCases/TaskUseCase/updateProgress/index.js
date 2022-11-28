"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SequelizeTask_respository_1 = require("../../../repositories/implementations/SequelizeTask.respository");
const UpdateInProgressTask_service_1 = __importDefault(require("./UpdateInProgressTask.service"));
const UpdateInProgressTask_controller_1 = __importDefault(require("./UpdateInProgressTask.controller"));
const sequelizeTaskRepository = new SequelizeTask_respository_1.SequelizeTaskRepository();
const updateInprogressTaskService = new UpdateInProgressTask_service_1.default(sequelizeTaskRepository);
const updateInprogressTaskController = new UpdateInProgressTask_controller_1.default(updateInprogressTaskService);
exports.default = updateInprogressTaskController;
