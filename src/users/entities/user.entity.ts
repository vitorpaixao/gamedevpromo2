import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  idusers: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column('int')
  score: number;
}
