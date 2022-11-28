import express from "express";
import deleteFolderController from "../useCases/folderUseCase/deleteFolder";
import createFolderController from "../useCases/folderUseCase/CreateFolder";
import Token from "../utils/GenerateToken";
import getAllFoldersController from "../useCases/folderUseCase/getAllFolders";
import validation from "../middleware/MiddlewareValidations";
import { schemaValidateFolder } from "../validation/schema/schemas";

const router = express()

const validateCreateFolder = validation(schemaValidateFolder)

router.get("/folder", Token.authToken, getAllFoldersController.findAll)
router.delete("/folder/:id", deleteFolderController.delete)
router.post("/folder", Token.authToken, validateCreateFolder, createFolderController.create)

export default router