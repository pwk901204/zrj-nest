/*
 * @Autor: wkpan2
 * @Date: 2021-08-08 16:57:48
 * @LastEditTime: 2021-08-08 17:30:10
 * @LastEditors: wkpan2
 * @Description: 添加描述
 */

import {
  ArgumentMetadata,
  BadGatewayException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    console.log(value);
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      throw new BadGatewayException('请传入数字');
    }
    return val;
  }
}
