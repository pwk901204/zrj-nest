import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { RoleGuardService } from './role-guard.service';
import { CreateRoleGuardDto } from './dto/create-role-guard.dto';
import { UpdateRoleGuardDto } from './dto/update-role-guard.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/common/decorators/roles.decorator';
import { RolesGuard } from 'src/common/guards/roles.guards';

@ApiBearerAuth()
@Controller('role-guard')
@ApiTags('role-guard')
@UseGuards(RolesGuard)
export class RoleGuardController {
  constructor(private readonly roleGuardService: RoleGuardService) {}

  @Get(':id')
  @Roles('admin')
  findOne(@Param('id') id: string, @Query('user') user: string) {
    console.log(user);
    return this.roleGuardService.findOne(+id);
  }
}
