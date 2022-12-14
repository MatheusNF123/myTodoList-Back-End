"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const makeLogin_1 = __importDefault(require("../useCases/UserUseCase/makeLogin"));
const createUser_1 = __importDefault(require("../useCases/UserUseCase/createUser"));
const MiddlewareValidations_1 = __importDefault(require("../middleware/MiddlewareValidations"));
const schemas_1 = require("../validation/schema/schemas");
const GenerateToken_1 = __importDefault(require("../utils/GenerateToken"));
const authUser_1 = __importDefault(require("../useCases/UserUseCase/authUser"));
const router = (0, express_1.default)();
const validateLogin = (0, MiddlewareValidations_1.default)(schemas_1.schemaValidateLogin);
const validateRegister = (0, MiddlewareValidations_1.default)(schemas_1.schemaValidateRegister);
router.post("/login", validateLogin, makeLogin_1.default.login);
router.post("/register", validateRegister, createUser_1.default.create);
router.get("/login", GenerateToken_1.default.authToken, authUser_1.default.auth);
exports.default = router;
