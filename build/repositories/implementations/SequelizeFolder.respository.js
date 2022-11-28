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
exports.SequelizeFolderRepository = void 0;
const Folders_1 = __importDefault(require("../../database/models/Folders"));
const Tasks_1 = __importDefault(require("../../database/models/Tasks"));
class SequelizeFolderRepository {
    constructor() {
        this.model = Folders_1.default;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const folders = yield this.model.findAll({
                include: { model: Tasks_1.default, as: 'tasks', attributes: { exclude: ["id"] } }
            });
            return folders;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.model.destroy({ where: { id } });
        });
    }
    create({ name, userId }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.model.create({ name, userId });
            return user;
        });
    }
    findOne({ name, userId }) {
        return __awaiter(this, void 0, void 0, function* () {
            const folder = yield this.model.findOne({ where: { name, user_id: userId } });
            return folder;
        });
    }
}
exports.SequelizeFolderRepository = SequelizeFolderRepository;
