import { InputType, Field } from 'type-graphql';

@InputType()
export class UserByEmail {
  @Field()
  email: string;
}
