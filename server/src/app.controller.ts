import { Controller, Request, Post } from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './authentication/guards/local-auth.guard';
import { AuthenticationService } from './authentication/authentication.service';
import { Public } from './authentication/decorator/is-public.decorator';

@Controller()
export class AppController {
  constructor(private authService: AuthenticationService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    console.log('APP CONTROLLER----------');
    return this.authService.login(req.user);
  }
}
