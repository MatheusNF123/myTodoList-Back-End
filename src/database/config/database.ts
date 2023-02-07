import 'dotenv/config';
import { Options } from 'sequelize';

const { HOST, PASSWORD_POSTGRES, DATABASE, DB_USERNAME, DB_PORT } = process.env;

// const config: Options = {
//   username: DB_USERNAME ,
//   password: PASSWORD_POSTGRES ,
//   database: DATABASE,
//   host: HOST ,
//   port: Number(DB_PORT) ,
//   dialect: 'postgres',
// }

const config: Options = {
  username: DB_USERNAME || process.env.DB_USER || 'root',
  password: PASSWORD_POSTGRES || process.env.DB_PASS || 'password',
  database: DATABASE || process.env.DB_NAME || 'todoList',
  host: HOST || process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  dialect: 'mysql',
}


module.exports = config;