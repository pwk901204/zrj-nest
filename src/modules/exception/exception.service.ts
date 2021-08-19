import { Injectable } from '@nestjs/common';
import { CreateExceptionDto } from './dto/create-exception.dto';
import { UpdateExceptionDto } from './dto/update-exception.dto';

@Injectable()
export class ExceptionService {
  create(createExceptionDto: CreateExceptionDto) {
    return 'This action adds a new exception';
  }

  findAll() {
    return `This action returns all exception`;
  }

  findOne(id: number) {
    return `This action returns a #${id} exception`;
  }

  update(id: number, updateExceptionDto: UpdateExceptionDto) {
    return `This action updates a #${id} exception`;
  }

  remove(id: number) {
    return `This action removes a #${id} exception`;
  }
}
