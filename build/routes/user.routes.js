"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const makeLogin_1 = __importDefault(require("../useCases/UserUseCase/makeLogin"));
const createUser_1 = __importDefault(require("../useCases/UserUseCase/createUser"));
const router = (0, express_1.default)();
router.post("/login", makeLogin_1.default.login);
router.post("/register", createUser_1.default.create);
exports.default = router;
