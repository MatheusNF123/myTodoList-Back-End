"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CreateUser_controller_1 = __importDefault(require("./CreateUser.controller"));
const CreateUser_service_1 = __importDefault(require("./CreateUser.service"));
const SequelizeUser_respository_1 = require("../../../repositories/implementations/SequelizeUser.respository");
const repoUser = new SequelizeUser_respository_1.SequelizeUserRepository();
const createUserService = new CreateUser_service_1.default(repoUser);
const createUserController = new CreateUser_controller_1.default(createUserService);
exports.default = createUserController;
