import { Request, RequestHandler, Response } from "express";
import MakeLoginService from "./MakeLogin.service";


export default class MakeLoginController {
  private _makeLoginService: MakeLoginService

  constructor(makeLoginService: MakeLoginService) {
    this._makeLoginService = makeLoginService
  }

  public login:RequestHandler = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await this._makeLoginService.login({ email, password });

    res.status(200).json({...user});
  }
}