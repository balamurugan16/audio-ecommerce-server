import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserCreateInput } from './user.schema';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUser(id: number) {
    return this.prisma.user.findFirst({
      where: {
        id,
      },
    });
  }

  async getUsers() {
    return this.prisma.user.findMany();
  }

  createUser(user: UserCreateInput) {
    return this.prisma.user.create({
      data: user,
    });
  }
}
