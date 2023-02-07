import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './auth.controller';
import { PasswordService } from './services/password.service';
import { LocalStrategy } from './strategies/local.strategy';
import { UsersService } from 'src/users/users.service';

@Module({
  providers: [AuthService, UsersService, PasswordService, LocalStrategy],
  controllers: [AuthController],
  exports: [PasswordService],
})
export class AuthModule {}
