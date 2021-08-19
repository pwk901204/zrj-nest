/*
 * @Autor: wkpan2
 * @Date: 2021-08-08 13:08:09
 * @LastEditTime: 2021-08-08 13:51:48
 * @LastEditors: wkpan2
 * @Description: 添加描述
 */

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const { method, path } = req;
    console.log(`${method} ${path}`);
    // console.log(req, res);
    next();
  }
}
