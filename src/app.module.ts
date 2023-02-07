import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { FeedsModule } from './feeds/feeds.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PasswordService } from './auth/services/password.service';

@Module({
  imports: [PrismaModule, FeedsModule, UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, PasswordService],
})
export class AppModule {}
