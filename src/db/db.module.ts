import { Module } from '@nestjs/common'
import { Pool } from 'pg'
import Config from 'src/constants'
import { execute } from './execute'

const dbProvider = {
  provide: 'PG_CONNECTION',
  useValue: new Pool({
    host: Config.DB_HOST,
    database: Config.DB_DATABASE,
    port: +Config.DB_PORT,
    user: Config.DB_USER,
    password: Config.DB_PASSWORD,
  })
}
execute()

@Module({
  providers: [dbProvider],
  exports: [dbProvider],
})
export class DbModule {}
