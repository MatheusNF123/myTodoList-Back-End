import MakeLoginController from "./MakeLogin.controller";
import MakeLoginService from "./MakeLogin.service";
import { SequelizeUserRepository } from "../../../repositories/implementations/SequelizeUser.respository";

const userRepo = new SequelizeUserRepository();
const makeLoginService = new MakeLoginService(userRepo);
const makeLoginController = new MakeLoginController(makeLoginService);

export default makeLoginController