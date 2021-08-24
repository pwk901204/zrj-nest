/*
 * @Author: wkpan2
 * @Date: 2021-08-19 17:22:24
 * @LastEditTime: 2021-08-19 17:25:25
 * @Description:
 */
import { join } from 'path';
export default {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'nest-zrj',
  entities: [join(__dirname, '../', '**/**.entity{.ts,.js}')],
  synchronize: true,
};
