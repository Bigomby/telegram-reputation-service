import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Vote {
  @PrimaryGeneratedColumn() id: number;
  @Column() userId: string;
  @Column() voter: string;
  @Column() tag: string;
}
