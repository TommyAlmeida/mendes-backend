import { Module } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { PhotosController } from './photos.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [PrismaService, PhotosService],
  controllers: [PhotosController],
})
export class PhotosModule {}
