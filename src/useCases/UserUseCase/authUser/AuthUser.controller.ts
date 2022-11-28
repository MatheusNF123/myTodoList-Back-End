import { RequestHandler } from "express";

export default class AuthUserController {
   auth:RequestHandler = (_req,res) => {
    res.sendStatus(200)
  }
}