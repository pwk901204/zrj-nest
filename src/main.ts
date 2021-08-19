import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { HttpExceptionFilter } from './common/filter/http-exception.filter';
import { ValidationPipe } from './common/pipes/validation.pipe';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
// import { RolesGuard } from './common/guards/roles.guards';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 全局中间件
  app.use(new LoggerMiddleware().use);

  // 全局过滤器
  app.useGlobalFilters(new HttpExceptionFilter());

  // 全局管道
  app.useGlobalPipes(new ValidationPipe());

  // 全局守卫
  // app.useGlobalGuards(new RolesGuard());  //???? 问题

  // 全局拦截器
  // app.useGlobalInterceptors(new LoggingInterceptor());

  const options = new DocumentBuilder()
    .setTitle('zrj-api')
    .setDescription('zrj-api description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
