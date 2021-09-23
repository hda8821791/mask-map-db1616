"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    const options = new swagger_1.DocumentBuilder()
        .setTitle('vite-app-api')
        .setDescription('使用NestJs搭建的服务端应用')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api-docs', app, document);
    const PORT = parseInt(process.env.PORT) || 5000;
    await app.listen(PORT);
    console.log(`http://localhost:${PORT}/api-docs`);
}
bootstrap();
//# sourceMappingURL=main.js.map