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
} from '@nestjs/common';
import { FeedsService } from './feeds.service';
import { CreateFeedDto } from './dto/create-feed.dto';
import { UpdateFeedDto } from './dto/update-feed.dto';
import { Observable } from 'rxjs';
import { feed } from '@prisma/client';

@Controller('feeds')
export class FeedsController {
  constructor(private readonly feedsService: FeedsService) {}

  @Post()
  create(@Body() createFeedDto: CreateFeedDto) {
    return this.feedsService.create(createFeedDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.feedsService.findOne(+id);
  }

  @Get()
  findSelected(
    @Query('take', ParseIntPipe) take: number = 1,
    @Query('skip', ParseIntPipe) skip: number = 1,
  ): Observable<feed[]> {
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
