import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthenticationService } from '../authentication.service';
import { User } from 'src/models/User/user.schema';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthenticationService) {
    super({ usernameField: 'email', passwordField: 'password' });
  }

  async validate(Email: string, Password: string): Promise<User> {
    console.log('LOCAL STRATEGY --------------------');
    const user = await this.authService.validateUser(Email, Password);
    if (!user) {
      throw new UnauthorizedException('Email address or password incorrect!');
    }
    return user;
  }
}
