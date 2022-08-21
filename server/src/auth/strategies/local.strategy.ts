import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'Email', passwordField: 'Password' });
  }

  async validate(Email: string, Password: string) {
    return this.authService.validateUser(Email, Password);
  }
}
