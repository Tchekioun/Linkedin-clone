import { Injectable } from '@nestjs/common';
import { Feed, Prisma } from '@prisma/client';
import { from, Observable } from 'rxjs';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFeedDto } from './dto/create-feed.dto';
import { UpdateFeedDto } from './dto/update-feed.dto';

@Injectable()
export class FeedsService {
  constructor(private prismaService: PrismaService) {}
  create(data: Prisma.FeedCreateInput, userId) {
    data.author = userId;
    return this.prismaService.feed.create({ data: data });
  }

  findAll(take: number, skip: number) {
    return this.prismaService.feed.findMany({ take: take, skip: skip });
  }

  findOne(id: number) {
    return `This action returns a #${id} feed`;
  }
  findPosts(take: number = 10, skip: number = 0): Observable<Feed[]> {
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
