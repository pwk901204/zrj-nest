/*
 * @Author: wkpan2
 * @Date: 2021-08-07 09:18:07
 * @LastEditTime: 2021-08-15 22:27:29
 * @Description:
 */
import * as path from 'path';
import { resolve } from 'path';
import { MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { HelloModule } from './modules/hello/hello.module';
import { UsersModule } from './modules/users/users.module';
import { ExceptionModule } from './modules/exception/exception.module';
import { RoleGuardModule } from './modules/role-guard/role-guard.module';
import { EmailModule } from './modules/email/email.module';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule, ConfigService } from 'nestjs-config';
import { StatusMonitorModule } from 'nest-status-monitor';
import { AuthModule } from './modules/auth/auth.module';

import statusMonitorConfig from './config/statusMonitor';

@Module({
  imports: [
    ConfigModule.load(resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),

    StatusMonitorModule.setUp(statusMonitorConfig),
    MailerModule.forRootAsync({
      // useFactory: () => ({
      //   transport: 'smtps://463680026@qq.com:yisrqcnjhldlbihg@smtp.qq.com',
      //   defaults: {
      //     from: '"nest-modules" <modules@nestjs.com>',
      //   },
      //   template: {
      //     dir: __dirname + '/templates/email',
      //     adapter: new PugAdapter(),
      //     options: {
      //       strict: true,
      //     },
      //   },
      // }),
      useFactory: (config: ConfigService) => config.get('email'),
      inject: [ConfigService],
    }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'root',
    //   database: 'test',
    //   entities: [],
    //   synchronize: true,
    // }),
    // CatsModule,
    HelloModule,
    UsersModule,
    ExceptionModule,
    RoleGuardModule,
    EmailModule,
    AuthModule,
  ],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   // 为 hello 路由添加中间件
  //   consumer
  //     .apply(LoggerMiddleware)
  //     // .exclude({ path: 'hello', method: RequestMethod.POST })
  //     .forRoutes('hello');
  // }
}