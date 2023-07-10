import { Body, Controller, Get, Post, Delete } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { async } from 'rxjs';
import { PhotoDto } from './types';

@Controller('photos')
export class PhotosController {
  constructor(private readonly photo: PhotosService) {}

  @Delete()
  async delete(@Body() body: { id: number }) {
    return await this.photo.delete(body.id);
  }

  @Post()
  create(@Body() data: PhotoDto) {
    return this.photo.create(data);
  }

  @Get()
  async findAll() {
    return await this.photo.findAll();
  }
}
