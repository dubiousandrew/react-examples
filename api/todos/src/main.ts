import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Todo Example')
    .setDescription('The todo api description')
    .setVersion('1')
    .addTag('todos')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);
  await app.listen(8080);
}
bootstrap();
