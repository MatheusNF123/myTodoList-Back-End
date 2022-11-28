import CreateUserController from "./CreateUser.controller";
import CreateUserService from "./CreateUser.service";
import { SequelizeUserRepository } from "../../../repositories/implementations/SequelizeUser.respository";

const repoUser = new SequelizeUserRepository();
const createUserService = new CreateUserService(repoUser);
const createUserController = new CreateUserController(createUserService);

export default createUserController