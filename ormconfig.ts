import { Users } from "src/users/entities/user.entity";
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
import "dotenv/config"
import { Products } from "src/products/entities/product.entity";
import { StyleProfile } from "src/user-profile/entities/styleProfile.entity";
import { UserProfile } from "src/user-profile/entities/user-profile.entity";
import { Wishlist } from "src/user-profile/entities/wishlist.entity";

const ormConfig: MysqlConnectionOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [Users, Products, UserProfile, StyleProfile, Wishlist],
    synchronize: true
}

export default ormConfig;