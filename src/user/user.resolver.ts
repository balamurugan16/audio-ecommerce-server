import 'reflect-metadata';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { User, UserCreateInput } from './user.schema';
import { UserService } from './user.service';

@Resolver(User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { nullable: true })
  async getUsers() {
    return this.userService.getUsers();
  }

  @Query(() => User, { nullable: true })
  async getUser(@Args('id') id: number) {
    return this.userService.getUser(id);
  }

  @Mutation(() => User)
  async createUser(@Args('user') user: UserCreateInput) {
    return this.userService.createUser(user);
  }
}
