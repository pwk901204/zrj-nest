/*
 * @Author: wkpan2
 * @Date: 2021-08-15 22:17:43
 * @LastEditTime: 2021-08-15 22:21:06
 * @Description:
 */
import { join } from 'path';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';

export default {
  transport: 'smtps://463680026@qq.com:yisrqcnjhldlbihg@smtp.qq.com',
  defaults: {
    from: '"nest-modules" <modules@nestjs.com>',
  },
  template: {
    dir: join(__dirname, '../templates/email'),
    adapter: new PugAdapter(),
    options: {
      strict: true,
    },
  },
};
