import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { PhotoDto } from './types';

@Injectable()
export class PhotosService {
  constructor(private readonly prisma: PrismaService) {}

  async create(photo: PhotoDto) {
    return await this.prisma.photo.create({
      data: {
        ...photo
      },
    });
  }

  async delete(id: number) {
    return await this.prisma.photo.delete({ where: { id: id } });
  }

  async findAll() {
    return await this.prisma.photo.findMany();
  }
}
