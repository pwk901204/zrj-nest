/*
 * @Author: wkpan2
 * @Date: 2021-08-15 23:52:49
 * @LastEditTime: 2021-08-16 00:00:59
 * @Description:
 */
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    // tslint:disable-next-line
    console.log(username, password);
    return { username, password };
    // const user: any = await this.authService.validateUser(username, password);
    // if (!user) {
    //   throw new HttpException(
    //     { message: 'authorized failed', error: 'please try again later.' },
    //     HttpStatus.BAD_REQUEST,
    //   );
    // }
    // return user;
  }
}
