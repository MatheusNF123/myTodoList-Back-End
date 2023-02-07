"use strict";
// import 'dotenv/config';
// import { Options } from 'sequelize';
Object.defineProperty(exports, "__esModule", { value: true });
// const config: Options = {
//   username: process.env.DB_USER || 'root',
//   password: process.env.DB_PASS || 'password',
//   database: process.env.DB_NAME || 'todoList',
//   host: process.env.DB_HOST || 'localhost',
//   port: Number(process.env.DB_PORT) || 3306,
//   dialect: 'mysql',
// }
// export = config;
require("dotenv/config");
const { HOST, PASSWORD_POSTGRES, DATABASE, DB_USERNAME, DB_PORT } = process.env;
const config = {
    username: DB_USERNAME || process.env.DB_USER || 'root',
    password: PASSWORD_POSTGRES || process.env.DB_PASS || 'password',
    database: DATABASE || process.env.DB_NAME || 'todoList',
    host: HOST || process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    dialect: 'mysql',
};
// const config: Options = {
//   username: DB_USERNAME || 'postgres',
//   password: PASSWORD_POSTGRES || 'meuDBTodoList101',
//   database: DATABASE || 'postgres',
//   host: HOST || 'db.svwbnipowtwtefwwybbf.supabase.co',
//   port: Number(DB_PORT) || 5432,
//   dialect: 'postgres',
// }
module.exports = config;
