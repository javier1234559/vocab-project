import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from '~/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  // CustomSwagger(app);
  app.setGlobalPrefix('api/v1');
  await app.listen(3001);
}
bootstrap();
