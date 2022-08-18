import { Injectable } from '@nestjs/common';
import { UserService } from 'src/models/User/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/models/User/user.schema';

@Injectable()
export class AuthenticationService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(Email: string, Password: string): Promise<User | null> {
    console.log('VALIDATE USER AUTHSERVICE --------------------');
    const user = await this.userService.findByEmail(Email);
    const isValidPassword = await bcrypt.compare(Password, user.Password);
    console.log(isValidPassword);
    if (user && isValidPassword) {
      return {
        ...user,
        Password: undefined,
      };
    }
    return null;
  }

  async login(user: any) {
    console.log('LOGIN AUTH SERVICE --------------------');
    const payload = {
      Email: user.Email,
      AccountType: user.AccountType,
      Status: user.Status,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
