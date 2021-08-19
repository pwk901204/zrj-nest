import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dot/create-hello.dto';

@Injectable()
export class HelloService {
  fetch(id: string): string {
    return `hello world ${id}`;
  }

  save(createCatDto: CreateCatDto) {
    return `save hello world ${createCatDto.name},${createCatDto.age}`;
  }

  update(id: string, message: string): string {
    return `update hello world ${id}:${message}`;
  }

  remove(id: string): string {
    return `remove hello world ${id}`;
  }
}
