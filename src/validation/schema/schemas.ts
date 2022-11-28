import { ITasks } from './../../entities/ITask';
import * as yup from "yup"
import { IUserLogin, IUserRegister } from "../../entities/IUser";
import { IFolderName } from "../../entities/IFolders";

export const schemaValidateLogin:yup.SchemaOf<IUserLogin> = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
})

export const schemaValidateRegister:yup.SchemaOf<IUserRegister> = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  username: yup.string().min(2).required()
})

export const schemaValidateFolder:yup.SchemaOf<IFolderName> = yup.object().shape({
  name: yup.string().min(1).required(),
})

export const schemaValidateCreateTask:yup.SchemaOf<Omit<ITasks, "id">> = yup.object().shape({
  name: yup.string().required(),
  date: yup.string().required(),
  inProgress: yup.boolean().required(),
  descricao: yup.string().notRequired(),
})

