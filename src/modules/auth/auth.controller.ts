/*
 * @Author: wkpan2
 * @Date: 2021-08-15 23:42:10
 * @LastEditTime: 2021-08-16 00:03:56
 * @Description:
 */
import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('/auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  getProfile(@Request() req) {
    console.log(req.user, req.user.username);
    return req.user.username;
  }
}
