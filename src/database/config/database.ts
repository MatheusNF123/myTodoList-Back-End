import 'dotenv/config';
import { Options } from 'sequelize';

const { HOST, PASSWORD_POSTGRES, DATABASE, DB_USERNAME, DB_PORT } = process.env;

const config: Options = {
  username: DB_USERNAME || 'postgres',
  password: PASSWORD_POSTGRES || 'meuDBTodoList101',
  database: DATABASE || 'postgres',
  host: HOST || 'db.svwbnipowtwtefwwybbf.supabase.co',
  port: Number(DB_PORT) || 5432,
  dialect: 'postgres',
}

module.exports = config;