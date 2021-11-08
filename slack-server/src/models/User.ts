import { Field, ID, ObjectType } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@ObjectType()
@Entity('User')
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  name: string;

  @Field(() => String)
  @Column()
  email: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true, default: 'none' })
  workspace: string;

  @Field(() => Date)
  @Column({ nullable: true })
  created: Date;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  photo: string;
}
