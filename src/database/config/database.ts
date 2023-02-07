import 'dotenv/config';
import { Options } from 'sequelize';

const { HOST, PASSWORD_POSTGRES, DATABASE, DB_USERNAME, DB_PORT } = process.env;

const config: Options = {
  username: DB_USERNAME ,
  password: PASSWORD_POSTGRES ,
  database: DATABASE,
  host: HOST ,
  port: Number(DB_PORT) ,
  dialect: 'postgres',
}


module.exports = config;