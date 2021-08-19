/*
 * @Autor: wkpan2
 * @Date: 2021-08-07 22:17:39
 * @LastEditTime: 2021-08-07 22:26:01
 * @LastEditors: wkpan2
 * @Description: 添加描述
 */
import { ApiProperty } from '@nestjs/swagger';

export enum UserRole {
  Admin = 'Admin',
  User = 'User',
}

export class Hello {
  @ApiProperty({
    example: 'Kitty',
    description: 'The name of the Cat',
  })
  name: string;

  @ApiProperty({ example: 1, description: 'The age of the Cat' })
  age: number;

  @ApiProperty({
    example: 'Maine Coon',
    description: 'The breed of the Cat',
  })
  breed: string;

  @ApiProperty({ enum: UserRole })
  role: UserRole;
}
