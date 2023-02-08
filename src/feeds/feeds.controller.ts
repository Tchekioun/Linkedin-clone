import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseIntPipe,
  Request,
  UseGuards,
} from '@nestjs/common';
import { FeedsService } from './feeds.service';
import { UpdateFeedDto } from './dto/update-feed.dto';
import { Observable } from 'rxjs';
import { Feed, Prisma } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateFeedDto } from './dto/create-feed.dto';

@Controller('feeds')
export class FeedsController {
  constructor(private readonly feedsService: FeedsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() data: Prisma.FeedCreateInput, @Request() req) {
    const userId = req.user.userId;
    return this.feedsService.create(data, userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.feedsService.findOne(+id);
  }

  @Get()
  findSelected(
    @Query('take', ParseIntPipe) take: number = 1,
    @Query('skip', ParseIntPipe) skip: number = 1,
  ): Observable<Feed[]> {
    take = take > 20 ? 20 : take;
    return this.feedsService.findPosts(take, skip);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFeedDto: UpdateFeedDto) {
    return this.feedsService.update(+id, updateFeedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.feedsService.remove(+id);
  }
}
