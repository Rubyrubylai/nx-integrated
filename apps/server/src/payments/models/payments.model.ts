import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'payments ' })
export class Payments {
  @Field(type => ID)
  id: string;

  @Field({ nullable: true })
  description?: string;
}
