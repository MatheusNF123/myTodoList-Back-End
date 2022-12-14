"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthUserController {
    constructor() {
        this.auth = (_req, res) => {
            res.sendStatus(200);
        };
    }
}
exports.default = AuthUserController;
