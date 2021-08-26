/*
 * @Author: wkpan2
 * @Date: 2021-08-07 17:47:48
 * @LastEditTime: 2021-08-23 09:48:28
 * @Description:
 */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() param) {
    const newParam = {
      ...param,
      status: true,
    };

    await this.usersService.create(newParam);
    return true;
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Post('/many')
  async createMany(@Body() users) {
    const newUsers = users.map((user) => ({ ...user, status: true }));
    await this.usersService.createMany(newUsers);
    return true;
  }
}
