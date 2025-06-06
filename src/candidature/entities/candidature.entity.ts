import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Candidature {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
