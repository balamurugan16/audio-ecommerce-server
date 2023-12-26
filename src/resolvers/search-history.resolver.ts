import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import 'reflect-metadata';
import { PrismaService } from 'src/prisma.service';
import { SearchHistory, SearchHistoryCreateInput } from 'src/schema';

@Resolver('SearchHistory')
export class SearchHistoryResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query(() => [SearchHistory])
  getSearchHistory(@Args('userId') userId: number) {
    return this.prisma.searchHistory.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 3,
    });
  }

  @ResolveField()
  createdAt(@Parent() searchHistory: SearchHistory) {
    const createdAt = new Date(searchHistory.createdAt);
    return createdAt.toISOString();
  }

  @Mutation(() => SearchHistory)
  logSearchHistory(
    @Args('searchHistory') searchHistory: SearchHistoryCreateInput,
  ) {
    return this.prisma.searchHistory.create({
      data: {
        searchTerm: searchHistory.searchTerm,
        userId: searchHistory.userId,
      },
    });
  }
}
