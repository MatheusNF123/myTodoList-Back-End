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
exports.SequelizeTaskRepository = void 0;
const Tasks_1 = __importDefault(require("../../database/models/Tasks"));
const customError_1 = __importDefault(require("../../Error/customError"));
class SequelizeTaskRepository {
    constructor() {
        this.model = Tasks_1.default;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const tasks = yield this.model.findAll();
            return tasks;
        });
    }
    create({ name, inProgress, descricao, date }, folderId) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.model.create({ name, date, inProgress, descricao, folderId });
            return user;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const tasks = yield this.model.findAll();
            const existsTask = tasks.some(task => task.id === id);
            if (!existsTask)
                throw new customError_1.default('non-existing task', 404);
            yield this.model.destroy({ where: { id } });
        });
    }
    update({ name, inProgress, descricao, date, id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const tasks = yield this.model.findAll();
            const existsTask = tasks.some(task => task.id === id);
            if (!existsTask)
                throw new customError_1.default('non-existing task', 404);
            yield this.model.update({ name, inProgress, descricao, date }, { where: { id } });
        });
    }
    updateProgress(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = yield this.model.findByPk(id);
            if (!task)
                throw new customError_1.default('non-existing task', 404);
            yield this.model.update({ inProgress: !(task === null || task === void 0 ? void 0 : task.inProgress) }, { where: { id } });
        });
    }
}
exports.SequelizeTaskRepository = SequelizeTaskRepository;
