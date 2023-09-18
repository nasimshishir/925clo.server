import { JwtModuleOptions } from "@nestjs/jwt";
import "dotenv/config"

const jwtConfig: JwtModuleOptions = {
    global: true,
    secret: `${process.env.ACCESS_KEY}`,
    signOptions: { expiresIn: '60s' }
}
console.log(process.env.ACCESS_KEY);

export default jwtConfig;