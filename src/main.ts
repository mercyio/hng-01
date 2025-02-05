/* eslint-disable @typescript-eslint/no-floating-promises */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ENVIRONMENT } from './common/configs/environment';

const serverPort = ENVIRONMENT.APP.PORT || 3000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: '*',
      methods: '*',
    },
  });

  app.setGlobalPrefix('/api');

  await app.listen(serverPort);
}
bootstrap().then(() =>
  console.log(
    `======= SERVER STARTED SUCCESSFULLY ON PORT : ${serverPort} ========`,
  ),
);
