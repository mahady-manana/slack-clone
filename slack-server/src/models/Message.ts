import { Field, ID, ObjectType } from 'type-graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity('Message')
export class Message extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Field(() => String)
  @Column()
  message: string;

  @Field(() => String)
  @Column()
  user: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  channel: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  receiver: string;

  @Field(() => String)
  @Column()
  workspace: string;

  @Field(() => Date)
  @CreateDateColumn()
  timestamp: Date;
}
