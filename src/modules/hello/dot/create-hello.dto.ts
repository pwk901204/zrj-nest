/*
 * @Autor: wkpan2
 * @Date: 2021-08-07 17:54:17
 * @LastEditTime: 2021-08-08 11:58:08
 * @LastEditors: wkpan2
 * @Description: 添加描述
 */

import { IsInt, IsString } from 'class-validator';

export class CreateCatDto {
  @IsString()
  readonly name: string;

  @IsInt()
  readonly age: number;

  @IsString()
  readonly breed: string;
}
