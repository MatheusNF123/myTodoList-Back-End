"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SequelizeTask_respository_1 = require("../../../repositories/implementations/SequelizeTask.respository");
const FindAllTask_service_1 = __importDefault(require("./FindAllTask.service"));
const FindAllTask_controller_1 = __importDefault(require("./FindAllTask.controller"));
const sequelizeTaskRepository = new SequelizeTask_respository_1.SequelizeTaskRepository();
const findAllTaskService = new FindAllTask_service_1.default(sequelizeTaskRepository);
const findAllTaskController = new FindAllTask_controller_1.default(findAllTaskService);
exports.default = findAllTaskController;
