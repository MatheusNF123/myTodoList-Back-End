"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DeleteFolder_controller_1 = __importDefault(require("./DeleteFolder.controller"));
const DeleteFolder_service_1 = __importDefault(require("./DeleteFolder.service"));
const SequelizeFolder_respository_1 = require("../../../repositories/implementations/SequelizeFolder.respository");
const repoFolder = new SequelizeFolder_respository_1.SequelizeFolderRepository();
const deleteFolderService = new DeleteFolder_service_1.default(repoFolder);
const deleteFolderController = new DeleteFolder_controller_1.default(deleteFolderService);
exports.default = deleteFolderController;
