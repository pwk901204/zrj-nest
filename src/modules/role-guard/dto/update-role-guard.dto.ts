import { PartialType } from '@nestjs/swagger';
import { CreateRoleGuardDto } from './create-role-guard.dto';

export class UpdateRoleGuardDto extends PartialType(CreateRoleGuardDto) {}
