import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PhotosService {
  constructor(private readonly prisma: PrismaService) {}

  async createPhoto(Name: string, Description: string) {
    return await this.prisma.photo.create({
      data: {
        Name,
        Description,
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
