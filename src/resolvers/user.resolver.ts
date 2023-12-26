import { SearchHistory, User, UserCreateInput } from '../schema';
import 'reflect-metadata';
import {
  Resolver,
  Query,
  Mutation,
  Parent,
  ResolveField,
  Args,
} from '@nestjs/graphql';
import { PrismaService } from 'src/prisma.service';

@Resolver('User')
export class UserResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query(() => [User], { nullable: true })
  async getUser(id: number) {
    return this.prisma.user.findFirst({
      where: {
        id,
      },
    });
  }

  @Query(() => User, { nullable: true })
  async getUsers() {
    return this.prisma.user.findMany();
  }

  @Mutation(() => User)
  createUser(@Args('user') user: UserCreateInput) {
    return this.prisma.user.create({
      data: user,
    });
  }

  @ResolveField(() => SearchHistory)
  searchHistory(@Parent() user: User) {
    return this.prisma.searchHistory.findMany({
      where: {
        userId: user.id,
      },
    });
  }
}
