import * as yup from "yup"
import { IUserLogin } from "../../entities/IUser";
import { IFolderName } from "../../entities/IFolders";
import CustomError from "../../Error/customError";
import { schemaValidateLogin } from "../schema/schemas";

export const validateLogin = async (body:Request, schema:yup.SchemaOf<any>) => {
  try {
    const data = await schema.validate(body, {abortEarly: true})
    return data
  } catch (err) {
    const yupError = err as yup.ValidationError
    throw new CustomError(yupError.message, 400)
  }
}