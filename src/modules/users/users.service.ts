/*
 * @Author: wkpan2
 * @Date: 2021-08-07 17:47:48
 * @LastEditTime: 2021-08-23 10:00:47
 * @Description:
 */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, getRepository, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
    private connnection: Connection,
  ) {}

  async findAll(): Promise<UserEntity[]> {
    return await this.usersRepository.find({ relations: ['photos'] });
  }

  async create(user): Promise<UserEntity> {
    const { name } = user;
    const u = await getRepository(UserEntity).findOne({ where: { name } });
    if (u) {
      throw new HttpException(
        {
          message: 'Input data validation failed',
          error: 'name must be unique.',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return await this.usersRepository.save(user);
  }

  async createMany(users: UserEntity[]) {
    const queryRunner = this.connnection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      users.forEach(async (user) => {
        await queryRunner.manager.getRepository(UserEntity).save(user);
      });

      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }
}
