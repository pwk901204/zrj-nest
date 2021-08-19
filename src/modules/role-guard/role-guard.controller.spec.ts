import { Test, TestingModule } from '@nestjs/testing';
import { RoleGuardController } from './role-guard.controller';
import { RoleGuardService } from './role-guard.service';

describe('RoleGuardController', () => {
  let controller: RoleGuardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoleGuardController],
      providers: [RoleGuardService],
    }).compile();

    controller = module.get<RoleGuardController>(RoleGuardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
