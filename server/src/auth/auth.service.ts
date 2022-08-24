import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/models/User/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './models/UserToken';
import { UserPayload } from './models/UserPayload';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(Email: string): Promise<UserToken> {
    const user = await this.userService.getId(Email);
    if (user) {
      const payload: UserPayload = {
        _id: user._id.toString(),
        FName: user.FName,
        LName: user.LName,
        AccountType: user.AccountType,
      };
      return {
        user: {
          _id: user._id.toString(),
          FName: user.FName,
          LName: user.LName,
          AccountType: user.AccountType,
        },
        access_token: this.jwtService.sign(payload),
      };
    }
  }

  async validateToken(token: string): Promise<UserPayload> {
    if (token) {
      const user = await this.jwtService.verify(token);
      if (user) {
        return user;
      }
    } else {
      return null;
    }
  }

  async validateUser(email: string, pass: string) {
    const user = await this.userService.findByEmail(email);
    if (user) {
      if (user.Registered && user.Status) {
        const isMatch = await bcrypt.compare(pass, user.Password);
        if (isMatch) {
          return user;
        }
      } else {
        throw new UnauthorizedException(
          "Account disabled or your registration request hasn't been accepted yet!",
        );
      }
    }
    throw new UnauthorizedException('Email address or password incorrect!');
  }
}
