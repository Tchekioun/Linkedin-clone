import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { UsersService } from 'src/users/users.service';
import { PasswordService } from './password.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private passwordService: PasswordService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    const isPassword = this.passwordService.comparePassword(
      password,
      user.password,
    );

    if (user && isPassword) {
      const { password, ...rest } = user;
      return rest;
    }
    return null;
  }

  async login(user: User) {
    const payload = {
      sub: user.id,
    };
    return { access_token: this.jwtService.sign(payload) };
  }
}
