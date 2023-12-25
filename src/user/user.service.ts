import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

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

  createUser(user: Prisma.UserCreateInput) {
    return this.prisma.user.create({
      data: user,
    });
  }
}
