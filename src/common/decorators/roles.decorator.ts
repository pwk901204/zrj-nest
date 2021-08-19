/*
 * @Autor: wkpan2
 * @Date: 2021-08-11 08:52:29
 * @LastEditTime: 2021-08-11 09:26:29
 * @LastEditors: wkpan2
 * @Description: 添加描述
 */
import { SetMetadata } from '@nestjs/common';
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
