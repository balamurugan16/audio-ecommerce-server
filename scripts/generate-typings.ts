import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const factory = new GraphQLDefinitionsFactory();

const shouldWatch = process.argv[2] === 'watch';

factory.generate({
  typePaths: ['src/schema.gql'],
  path: join(process.cwd(), 'src/schema.ts'),
  outputAs: 'class',
  skipResolverArgs: true,
  watch: shouldWatch,
});
