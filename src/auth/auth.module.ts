import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './auth.controller';
import { PasswordService } from './services/password.service';

@Module({
  providers: [AuthService, PasswordService],
  controllers: [AuthController],
  exports: [PasswordService],
})
export class AuthModule {}
