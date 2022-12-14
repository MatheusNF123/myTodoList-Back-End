"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const deleteFolder_1 = __importDefault(require("../useCases/folderUseCase/deleteFolder"));
const CreateFolder_1 = __importDefault(require("../useCases/folderUseCase/CreateFolder"));
const GenerateToken_1 = __importDefault(require("../utils/GenerateToken"));
const getAllFolders_1 = __importDefault(require("../useCases/folderUseCase/getAllFolders"));
const MiddlewareValidations_1 = __importDefault(require("../middleware/MiddlewareValidations"));
const schemas_1 = require("../validation/schema/schemas");
const router = (0, express_1.default)();
const validateCreateFolder = (0, MiddlewareValidations_1.default)(schemas_1.schemaValidateFolder);
router.get("/folder", GenerateToken_1.default.authToken, getAllFolders_1.default.findAll);
router.delete("/folder/:id", deleteFolder_1.default.delete);
router.post("/folder", GenerateToken_1.default.authToken, validateCreateFolder, CreateFolder_1.default.create);
exports.default = router;
