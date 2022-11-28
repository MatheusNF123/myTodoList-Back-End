"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateFolder_controller_1 = __importDefault(require("./CreateFolder.controller"));
const CreateFolder_service_1 = __importDefault(require("./CreateFolder.service"));
const SequelizeFolder_respository_1 = require("../../../repositories/implementations/SequelizeFolder.respository");
const repoFolder = new SequelizeFolder_respository_1.SequelizeFolderRepository();
const createFolderService = new CreateFolder_service_1.default(repoFolder);
const createFolderController = new CreateFolder_controller_1.default(createFolderService);
exports.default = createFolderController;
