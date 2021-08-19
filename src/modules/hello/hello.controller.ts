/*
 * @Author: wkpan2
 * @Date: 2021-08-07 15:39:19
 * @LastEditTime: 2021-08-15 13:25:34
 * @Description:
 */
/*
 * @Author: wkpan2
 * @Date: 2021-08-07 15:39:19
 * @LastEditTime: 2021-08-15 13:21:49
 * @Description:
 */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBasicAuth,
  ApiBody,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { LoggingInterceptor } from 'src/common/interceptors/logging.interceptor';
import { Hello, UserRole } from './classes/hello';
import { CreateCatDto } from './dot/create-hello.dto';
import { HelloService } from './hello.service';

@ApiBasicAuth()
@ApiTags('hello')
@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  @ApiQuery({ name: 'id', required: false })
  @ApiQuery({ name: 'role', enum: UserRole })
  @ApiResponse({
    status: 200,
    type: Hello,
  })
  fetch(@Query() { id }): string {
    return this.helloService.fetch(id);
  }

  @Post()
  // @UseInterceptors(
  //   FileInterceptor('<name of file here - asdasd in your screenshot>'),
  // )
  save(@Body() createCatDto: CreateCatDto): string {
    return this.helloService.save(createCatDto);
  }

  @UseInterceptors(LoggingInterceptor)
  @Patch(':id')
  @ApiParam({ name: 'id' })
  @ApiBody({ description: '填写更新内容' })
  update(@Param() { id }, @Body() { message }): string {
    return this.helloService.update(id, message);
  }

  @Delete(':id')
  remove(@Param() { id }): string {
    return this.helloService.remove(id);
  }
}
