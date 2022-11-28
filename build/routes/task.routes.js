"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createTask_1 = __importDefault(require("../useCases/TaskUseCase/createTask"));
const deleteTask_1 = __importDefault(require("../useCases/TaskUseCase/deleteTask"));
const findAllTask_1 = __importDefault(require("../useCases/TaskUseCase/findAllTask"));
const updateProgress_1 = __importDefault(require("../useCases/TaskUseCase/updateProgress"));
const updateTask_1 = __importDefault(require("../useCases/TaskUseCase/updateTask"));
const GenerateToken_1 = __importDefault(require("../utils/GenerateToken"));
const router = (0, express_1.default)();
router.post("/task/folder/:id", GenerateToken_1.default.authToken, createTask_1.default.create);
router.delete("/task/:id", deleteTask_1.default.delete);
router.get("/task", findAllTask_1.default.findAll);
router.put("/task/:id", updateTask_1.default.update);
router.patch("/task/:id/inProgress", updateProgress_1.default.updateProgress);
exports.default = router;
