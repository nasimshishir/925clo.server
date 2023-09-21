import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
import "dotenv/config"

const ormConfig: MysqlConnectionOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: ["dist/src/**/entities/*.entity{.ts,.js}"],
    synchronize: true
}

export default ormConfig;