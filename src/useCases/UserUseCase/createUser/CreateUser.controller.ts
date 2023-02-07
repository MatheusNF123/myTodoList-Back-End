
import { RequestHandler } from "express";
import CreateUserService from "./CreateUser.service";


export default class CreateUserController {
  private createUserService: CreateUserService;

  constructor(_createUserService: CreateUserService) {
    this.createUserService = _createUserService;
  }

  create:RequestHandler = async (req,res) => {
    const user = await this.createUserService.create(req.body);
    
    res.status(201).json({...user});
  }
}