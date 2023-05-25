import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
    constructor(private readonly prismaService: PrismaService){}

    async createUser(email: string, password: string){
        return await this.prismaService.user.create({
            data: {
                email,
                password
            }
        })
    }
}
