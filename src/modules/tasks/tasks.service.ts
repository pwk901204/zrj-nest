/*
 * @Author: wkpan2
 * @Date: 2021-08-24 17:38:00
 * @LastEditTime: 2021-08-24 18:12:28
 * @Description:
 */
import { Injectable, Logger } from '@nestjs/common';
import { Cron, Interval, Timeout } from '@nestjs/schedule';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  @Cron('45 * * * * *')
  handlerCron() {
    this.logger.debug('Called when the second is 45');
  }

  @Interval(10000)
  handlerInterval() {
    this.logger.debug('Called every 10 seconds');
  }

  @Timeout(5000)
  handleTimeout() {
    this.logger.debug('Called once after 5 seconds');
  }
}
