import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: '*',
      methods: '*',
    },
  });

  app.setGlobalPrefix('/api');

  await app.listen(5575);
}
bootstrap();
