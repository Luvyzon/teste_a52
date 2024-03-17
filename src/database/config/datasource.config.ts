import { DataSourceOptions } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();

export function getConfig() {
  return {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USERNAME,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    entities: [__dirname + '/../../**/*.entity.{js,ts}'],
    migrations: [__dirname + '/../migrations/*{.ts,.js}'],
    synchronize: false,
    logging: true,
  } as DataSourceOptions;
}
