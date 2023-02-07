import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PasswordService } from 'src/auth/services/password.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    private prismaService: PrismaService,
    private passwordService: PasswordService,
  ) {}
  async create(data: Prisma.UserCreateInput) {
    data.password = await this.passwordService.hashPassword(data.password);
    const { password, ...rest } = await this.prismaService.user.create({
      data,
    });
    return rest;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
