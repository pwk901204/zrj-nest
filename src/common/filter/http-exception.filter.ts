/*
 * @Autor: wkpan2
 * @Date: 2021-08-08 15:58:03
 * @LastEditTime: 2021-08-08 16:25:20
 * @LastEditors: wkpan2
 * @Description: 添加描述
 */

import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const req = ctx.getRequest<Request>();
    const res = ctx.getResponse<Response>();
    const status = exception.getStatus();

    const { error, message, pwk }: any = exception.getResponse();

    res.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: req.url,
      error,
      message,
      pwk,
    });
  }
}
