import { Injectable } from '@nestjs/common';
import { CreateRoleGuardDto } from './dto/create-role-guard.dto';
import { UpdateRoleGuardDto } from './dto/update-role-guard.dto';

@Injectable()
export class RoleGuardService {
  create(createRoleGuardDto: CreateRoleGuardDto) {
    return 'This action adds a new roleGuard';
  }

  findAll() {
    return `This action returns all roleGuard`;
  }

  findOne(id: number) {
    return `This action returns a #${id} roleGuard`;
  }

  update(id: number, updateRoleGuardDto: UpdateRoleGuardDto) {
    return `This action updates a #${id} roleGuard`;
  }

  remove(id: number) {
    return `This action removes a #${id} roleGuard`;
  }
}
