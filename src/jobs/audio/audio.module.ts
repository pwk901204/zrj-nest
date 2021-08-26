/*
 * @Author: wkpan2
 * @Date: 2021-08-25 11:11:42
 * @LastEditTime: 2021-08-25 23:10:55
 * @Description:
 */
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ConfigService } from 'nestjs-config';
import { AudioController } from './audio.controller';
import { AudioProcessor } from './audio.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'audio',
      // useFactory: (config: ConfigService) => ({
      //   redis: config.get('redis'),
      // }),
      // inject: [ConfigService],
    }),
  ],
  controllers: [AudioController],
  providers: [AudioProcessor],
})
export class AudioModule {}
