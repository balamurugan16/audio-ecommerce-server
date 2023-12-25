/* eslint-disable @typescript-eslint/no-unused-vars */
import 'reflect-metadata';
import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { IsEmail, IsString } from 'class-validator';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  email: string;

  @Field(() => String)
  name: string;
}

@InputType()
export class UserCreateInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsString()
  name: string;
}
