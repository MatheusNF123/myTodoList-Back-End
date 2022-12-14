"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuthUser_controller_1 = __importDefault(require("./AuthUser.controller"));
const authUserController = new AuthUser_controller_1.default();
exports.default = authUserController;
