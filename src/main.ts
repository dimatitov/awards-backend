import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { corsOptions } from "./cors.config";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(corsOptions);

  const config = new DocumentBuilder()
    .setTitle("Awards")
    .setDescription("Голосовалка")
    .setVersion("1.0")
    .addTag("Тег")
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup("api/docs", app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
