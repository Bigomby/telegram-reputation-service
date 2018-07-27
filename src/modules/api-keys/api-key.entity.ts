import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class ApiKey {
  @PrimaryColumn() id: string;
  @Column() ttl: number;
}
