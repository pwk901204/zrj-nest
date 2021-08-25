/*
 * @Author: wkpan2
 * @Date: 2021-08-25 11:11:50
 * @LastEditTime: 2021-08-25 23:19:50
 * @Description:
 */
import { Process, Processor, OnQueueActive } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';

@Processor('audio')
export class AudioProcessor {
  private readonly logger = new Logger(AudioProcessor.name);

  @OnQueueActive()
  onActive(job: Job) {
    this.logger.debug(
      `Processing job ${job.id} of type ${job.name} with data ${job.data}...`,
    );
  }

  @Process('transcode')
  handleTranscode(job: Job<unknown>) {
    console.log(2);
    this.logger.debug('Start transcoding...');
    this.logger.debug(job.data);
    this.logger.debug('Transcoding completed');
  }
}
