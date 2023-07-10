import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(private readonly prismaService: PrismaService) { }

    async create(email: string, password: string) {
        const saltOrRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltOrRounds);

        password = hashedPassword;

        return await this.prismaService.user.create({
            data: {
                email,
                password
            }
        })
    }

    async findOneByEmail(email: string) {
        return await this.prismaService.user.findFirst({
            where: {
                email
            }
        })
    }
}
