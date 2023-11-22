import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1')
  app.enableCors({
    origin: 'http://localhost:3000',
    // Other CORS options can be set here (e.g., allowedHeaders, exposedHeaders, etc.)
  });
  app.use(cookieParser())
  await app.listen(8000);
}
bootstrap();
