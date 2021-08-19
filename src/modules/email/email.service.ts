/*
 * @Author: wkpan2
 * @Date: 2021-08-15 13:27:53
 * @LastEditTime: 2021-08-15 21:21:33
 * @Description:
 */
import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  sendEmail() {
    this.mailerService.sendMail({
      to: 'pwkzyy@163.com',
      from: '463680026@qq.com',
      // subject: 'Testing Nest MailerModule ✔',
      subject: 'Walker Lee Love You ✔',
      // html: '<b>Welcome Frost!</b>',
      template: './welcome',
    });
  }
}
