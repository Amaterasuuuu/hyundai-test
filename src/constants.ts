import * as dotenv from 'dotenv'
dotenv.config()

const Config = {
  PORT: process.env.PORT,
  DB_HOST: process.env.DB_HOST,
  DB_DATABASE: process.env.DB_NAME,
  DB_PORT: process.env.DB_PORT,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DEFAULT_EMAIL: process.env.DB_HOST,
  DEFAULT_PASSWORD: process.env.DB_HOST,
}

export default Config
