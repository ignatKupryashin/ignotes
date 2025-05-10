import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const config = new DocumentBuilder()
      .setTitle('Ignotes documentation')
      .setDescription('Описание API приложения')
      .addTag('Notes')
      .setVersion('1.0')
      .build();
  const document = SwaggerModule.createDocument(app, config);

  // Подключаем Swagger UI
  SwaggerModule.setup('swagger', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
