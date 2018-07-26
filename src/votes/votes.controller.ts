import { Controller, Post, Body, Get } from '@nestjs/common';

import { VotesService } from './votes.service';
import { Vote } from './vote.entity';
import { VoteDto } from './vote.dto';

@Controller('votes')
export class VotesController {
  constructor(private readonly votesService: VotesService) {}

  @Post()
  async vote(@Body() vote: VoteDto): Promise<Vote> {
    return this.votesService.vote(vote.userId, vote.tag);
  }
}
