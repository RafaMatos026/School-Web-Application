import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UserService } from 'src/models/User/user.service';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local.guard';
import { Public } from './decorators/isPublic.decorator';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Public()
  @Post('validateToken')
  @HttpCode(HttpStatus.OK)
  async validateToken(@Body('Token') token: string) {
    return this.authService.validateToken(token);
  }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(
    @Body('Email') Email: string,
    @Body('Password') Password: string,
  ) {
    return this.authService.login(Email);
  }
}
