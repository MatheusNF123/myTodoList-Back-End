"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateTask_controller_1 = __importDefault(require("./CreateTask.controller"));
const CreateTask_service_1 = __importDefault(require("./CreateTask.service"));
const SequelizeTask_respository_1 = require("../../../repositories/implementations/SequelizeTask.respository");
const SequelizeFolder_respository_1 = require("./../../../repositories/implementations/SequelizeFolder.respository");
const sequelizeTaskRepository = new SequelizeTask_respository_1.SequelizeTaskRepository();
const sequelizeFolderRepository = new SequelizeFolder_respository_1.SequelizeFolderRepository();
const createTaskService = new CreateTask_service_1.default(sequelizeTaskRepository, sequelizeFolderRepository);
const createTaskController = new CreateTask_controller_1.default(createTaskService);
exports.default = createTaskController;
