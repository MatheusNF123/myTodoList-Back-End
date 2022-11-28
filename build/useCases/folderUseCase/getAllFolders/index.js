"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SequelizeFolder_respository_1 = require("../../../repositories/implementations/SequelizeFolder.respository");
const GetAllFolders_service_1 = __importDefault(require("./GetAllFolders.service"));
const GetAllFolders_controller_1 = __importDefault(require("./GetAllFolders.controller"));
const sequelizeFolderRepository = new SequelizeFolder_respository_1.SequelizeFolderRepository();
const getllAllFoldersService = new GetAllFolders_service_1.default(sequelizeFolderRepository);
const getllAllFoldersController = new GetAllFolders_controller_1.default(getllAllFoldersService);
exports.default = getllAllFoldersController;
