import { Field, ArgsType, ID } from '@nestjs/graphql';

@ArgsType()
export class GetPaymentsArgs {
  @Field(type => ID)
  id: string;
}
