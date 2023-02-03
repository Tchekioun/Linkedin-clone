import { Injectable } from '@nestjs/common';
import { feed, Prisma } from '@prisma/client';
import { from, Observable } from 'rxjs';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateFeedDto } from './dto/update-feed.dto';

@Injectable()
export class FeedsService {
  constructor(private prismaService: PrismaService) {}
  create(data: Prisma.feedCreateInput) {
    return this.prismaService.feed.create({ data: data });
  }

  findAll(take: number, skip: number) {
    return this.prismaService.feed.findMany({ take: take, skip: skip });
  }

  findOne(id: number) {
    return `This action returns a #${id} feed`;
  }
  findPosts(take: number = 10, skip: number = 0): Observable<feed[]> {
    return from(this.prismaService.feed.findMany({ take, skip }));
  }

  findSelected(id: number) {
    return `This action returns a #${id} feed`;
  }

  update(id: number, updateFeedDto: UpdateFeedDto) {
    return `This action updates a #${id} feed`;
  }

  remove(id: number) {
    return `This action removes a #${id} feed`;
  }
}
