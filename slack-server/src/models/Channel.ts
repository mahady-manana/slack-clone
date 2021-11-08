import { Field, ID, ObjectType } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@ObjectType()
@Entity('Channel')
export class Channel extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => [String])
  @Column()
  users: string;

  @Field(() => String)
  @Column()
  workspace: string;
}
