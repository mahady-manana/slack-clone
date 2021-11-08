import { Field, ID, ObjectType } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@ObjectType()
@Entity('Workspace')
export class Workspace extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  users: string;

  @Field(() => String)
  @Column()
  channels: string;
}

// import { Field, ID, ObjectType } from 'type-graphql';
// import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

// @ObjectType()
// @Entity('Workspace')
// export class Workspace extends BaseEntity {
//   @Field(() => ID)
//   @PrimaryGeneratedColumn('uuid')
//   id: number;

//   @Field(() => String)
//   @Column()
//   name: string;

//   @Field(() => [String])
//   @Column()
//   users: string;

//   @Field(() => [String])
//   @Column()
//   channels: string;
// }
