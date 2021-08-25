/*
 * @Author: wkpan2
 * @Date: 2021-08-25 11:11:26
 * @LastEditTime: 2021-08-25 23:40:47
 * @Description:
 */
import { InjectQueue } from '@nestjs/bull';
import { Controller, Post } from '@nestjs/common';
import { Queue } from 'bull';

@Controller('audio')
export class AudioController {
  constructor(@InjectQueue('audio') private readonly audioQueue: Queue) {}

  @Post('transcode')
  async transcode() {
    // await this.audioQueue.add('transcode', {
    //   foo: 'bar',
    // });
    await this.audioQueue.add(
      'transcode',
      {
        file: 'audio.mp3',
      },
      { delay: 1000 },
    );
  }
}
