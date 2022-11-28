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
const schemas_1 = require("../../../validation/schema/schemas");
class MakeLoginController {
    constructor(makeLoginService) {
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield (0, schemas_1.validateLogin)(req.body);
            const { email, password } = req.body;
            const { userName, token } = yield this._makeLoginService.login({ email, password });
            res.status(200).json({ userName, email, token });
        });
        this._makeLoginService = makeLoginService;
    }
}
exports.default = MakeLoginController;
