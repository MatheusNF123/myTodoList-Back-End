"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MakeLogin_controller_1 = __importDefault(require("./MakeLogin.controller"));
const MakeLogin_service_1 = __importDefault(require("./MakeLogin.service"));
const SequelizeUser_respository_1 = require("../../../repositories/implementations/SequelizeUser.respository");
const userRepo = new SequelizeUser_respository_1.SequelizeUserRepository();
const makeLoginService = new MakeLogin_service_1.default(userRepo);
const makeLoginController = new MakeLogin_controller_1.default(makeLoginService);
exports.default = makeLoginController;
