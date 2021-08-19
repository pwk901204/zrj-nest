import { PartialType } from '@nestjs/swagger';
import { CreateExceptionDto } from './create-exception.dto';

export class UpdateExceptionDto extends PartialType(CreateExceptionDto) {}
