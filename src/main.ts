import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const options = new DocumentBuilder()
    // 标题
    .setTitle('vite-app-api')
    // 描述
    .setDescription('使用NestJs搭建的服务端应用')
    // 版本号
    .setVersion('1.0')
    // 标签，此处暂时不需要
    // .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
  const PORT = parseInt(process.env.PORT) || 5000;
  await app.listen(PORT);
  console.log(`http://localhost:${PORT}/api-docs`);
}
bootstrap();
