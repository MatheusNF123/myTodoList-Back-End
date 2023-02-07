import { ITasks } from './../../entities/ITask';
import * as yup from "yup"
import { IUserLogin, IUserRegister } from "../../entities/IUser";
import { IFolderName } from "../../entities/IFolders";

export const schemaValidateLogin:yup.SchemaOf<IUserLogin> = yup.object().shape({
  email: yup.string().email("Não e um email valido").required("Este campo é obrigatório"),
  password: yup.string().min(6, "A senha deve ter 6 caracteres").required("Este campo é obrigatório"),
})

export const schemaValidateRegister:yup.SchemaOf<IUserRegister> = yup.object().shape({
  username: yup.string().min(2, "Username deve ter 2 caracteres no mínimo").required("Este campo é obrigatório"),
  email: yup.string().email("Não e um email valido").required("Este campo é obrigatório"),
  password: yup.string().min(6, "A senha deve ter 6 caracteres no mínimo").required("Este campo é obrigatório"),
})

export const schemaValidateFolder:yup.SchemaOf<IFolderName> = yup.object().shape({
  name: yup.string().min(1, "Digite o nome da pasta").required("Digite o nome da pasta"),
})

export const schemaValidateCreateTask:yup.SchemaOf<Omit<ITasks, "id">> = yup.object().shape({
  name: yup.string().required(),
  date: yup.string().required(),
  inProgress: yup.boolean().required(),
  descricao: yup.string().notRequired(),
})

