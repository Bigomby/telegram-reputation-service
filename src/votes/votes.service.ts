import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Vote } from './vote.entity';

@Injectable()
export class VotesService {
  constructor(
    @InjectRepository(Vote) private readonly repository: Repository<Vote>,
  ) {}

  public async findAll(): Promise<Array<Vote>> {
    return this.repository.find();
  }

  public async vote(userId: string, tag: string): Promise<Vote> {
    const vote = new Vote();
    vote.userId = userId;
    vote.tag = tag;

    return this.repository.save(vote);
  }
}
