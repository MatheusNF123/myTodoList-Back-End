"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaValidateCreateTask = exports.schemaValidateFolder = exports.schemaValidateRegister = exports.schemaValidateLogin = void 0;
const yup = __importStar(require("yup"));
exports.schemaValidateLogin = yup.object().shape({
    email: yup.string().email("Não e um email valido").required("Este campo é obrigatório"),
    password: yup.string().min(6, "A senha deve ter 6 caracteres").required("Este campo é obrigatório"),
});
exports.schemaValidateRegister = yup.object().shape({
    username: yup.string().min(2, "Username deve ter 2 caracteres no mínimo").required("Este campo é obrigatório"),
    email: yup.string().email("Não e um email valido").required("Este campo é obrigatório"),
    password: yup.string().min(6, "A senha deve ter 6 caracteres no mínimo").required("Este campo é obrigatório"),
});
exports.schemaValidateFolder = yup.object().shape({
    name: yup.string().min(1, "Digite o nome da pasta").required("Digite o nome da pasta"),
});
exports.schemaValidateCreateTask = yup.object().shape({
    name: yup.string().required(),
    date: yup.string().required(),
    inProgress: yup.boolean().required(),
    descricao: yup.string().notRequired(),
});
