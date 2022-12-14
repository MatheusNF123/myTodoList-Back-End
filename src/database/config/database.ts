// import 'dotenv/config';
// import { Options } from 'sequelize';

// const config: Options = {
//   username: process.env.DB_USER || 'root',
//   password: process.env.DB_PASS || 'password',
//   database: process.env.DB_NAME || 'todoList',
//   host: process.env.DB_HOST || 'localhost',
//   port: Number(process.env.DB_PORT) || 3306,
//   dialect: 'mysql',
// }

// export = config;
import 'dotenv/config';
import { Options } from 'sequelize';

const { HOST, PASSWORD_POSTGRES, DATABASE, DB_USERNAME, DB_PORT } = process.env;

const config: Options = {
  username: DB_USERNAME|| 'postgres',
  password: PASSWORD_POSTGRES || 'meuDBTodoList101',
  database: DATABASE || 'postgres',
  host: HOST || 'db.svwbnipowtwtefwwybbf.supabase.co',
  port: Number(DB_PORT) || 5432,
  dialect: 'postgres',
}

module.exports = config;