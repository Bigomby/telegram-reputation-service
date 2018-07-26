import { Entity, Column, PrimaryColumn, BaseEntity } from 'typeorm';

@Entity()
export class ApiKey extends BaseEntity {
  @PrimaryColumn() id: string;
  @Column() ttl: number;
}
