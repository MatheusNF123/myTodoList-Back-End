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
Object.defineProperty(exports, "__esModule", { value: true });
class CreateFolderController {
    constructor(_serviceFolderCreate) {
        this._serviceFolderCreate = _serviceFolderCreate;
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log(req.user.id);
            const folder = yield this._serviceFolderCreate.create(req.body, req.user.id);
            res.status(201).json(folder);
        });
    }
}
exports.default = CreateFolderController;
