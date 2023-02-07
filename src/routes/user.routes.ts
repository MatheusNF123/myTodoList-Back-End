import express from "express";
import makeLoginController from "../useCases/UserUseCase/makeLogin";
import createUserController from "../useCases/UserUseCase/createUser";
import validation from "../middleware/MiddlewareValidations";
import { schemaValidateLogin, schemaValidateRegister } from "../validation/schema/schemas";
import Token from "../utils/GenerateToken";
import authUserController from "../useCases/UserUseCase/authUser";

const router = express()

const validateLogin = validation(schemaValidateLogin)
const validateRegister = validation(schemaValidateRegister)

router.post("/login", validateLogin, makeLoginController.login)
router.post("/register", validateRegister, createUserController.create)
router.get("/auth", Token.authToken, authUserController.auth)

export default router