import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  UseFilters,
  ParseIntPipe,
} from '@nestjs/common';
import { ExceptionService } from './exception.service';
import { CreateExceptionDto } from './dto/create-exception.dto';
import { UpdateExceptionDto } from './dto/update-exception.dto';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from 'src/common/filter/http-exception.filter';
// import { ParseIntPipe } from 'src/common/pipes/parse-int.pipe';

// @UseFilters(new HttpExceptionFilter())
@ApiTags('exception')
@Controller('exception')
export class ExceptionController {
  constructor(private readonly exceptionService: ExceptionService) {}

  @Post()
  create(@Body() { createExceptionDto }) {
    return this.exceptionService.create(createExceptionDto);
  }

  @Get()
  findAll() {
    return this.exceptionService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id' })
  findOne(@Param('id', new ParseIntPipe()) id: string) {
    if (id === '1') {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: '请求id不能为1',
          error: 'id is not be 1',
          pwk: 11,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.exceptionService.findOne(+id);
  }

  @Patch(':id')
  @ApiParam({ name: 'id' })
  update(
    @Param('id') id: string,
    @Body() updateExceptionDto: UpdateExceptionDto,
  ) {
    return this.exceptionService.update(+id, updateExceptionDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id' })
  remove(@Param('id') id: string) {
    return this.exceptionService.remove(+id);
  }
}
