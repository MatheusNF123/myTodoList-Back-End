module.exports = {
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'meuDBTodoList101',
  database: process.env.DB_NAME || 'postgres',
  host: process.env.DB_HOST || 'db.svwbnipowtwtefwwybbf.supabase.co',
  port: Number(process.env.DB_PORT) || 5432,
  dialect: 'postgres',
}