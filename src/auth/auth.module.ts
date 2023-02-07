import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './auth.controller';
import { PasswordService } from './services/password.service';
import { LocalStrategy } from './strategies/local.strategy';
import { UsersService } from 'src/users/users.service';
import { JwtModule } from '@nestjs/jwt';
import { env } from 'process';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: env.JWT_SECRET,
      signOptions: { expiresIn: '300s' },
    }),
  ],
  providers: [
    AuthService,
    UsersService,
    PasswordService,
    LocalStrategy,
    JwtStrategy,
  ],
  controllers: [AuthController],
  exports: [PasswordService],
})
export class AuthModule {}
