"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customError_1 = __importDefault(require("../../../Error/customError"));
class CreateTaskService {
    constructor(repoTask, repoFolder) {
        this.repoTask = repoTask;
        this.repoFolder = repoFolder;
    }
    create(infoTask, folderId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const folder = yield this.repoFolder.findAll();
            const hasPermission = folder.find((folder) => folder.id === folderId);
            if (!hasPermission)
                throw new customError_1.default("non-existent folder", 400);
            if (hasPermission.userId !== userId)
                throw new customError_1.default("don't have permission", 400);
            const task = yield this.repoTask.create(infoTask, folderId);
            return task;
        });
    }
}
exports.default = CreateTaskService;
