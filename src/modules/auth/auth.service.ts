/*
 * @Author: wkpan2
 * @Date: 2021-08-15 23:42:10
 * @LastEditTime: 2021-08-15 23:55:12
 * @Description:
 */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  validateUser(username: string, password: string) {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly jwtService: JwtService) {}

  login(user: any) {
    const payload = { username: user.username, sub: user.userId };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
