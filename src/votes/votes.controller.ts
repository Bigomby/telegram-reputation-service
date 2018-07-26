import { Controller, Post, Body, UseGuards, Headers } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { VotesService } from './votes.service';
import { Vote } from './vote.entity';
import { VoteDto } from './vote.dto';

@Controller('votes')
export class VotesController {
  constructor(private readonly votesService: VotesService) {}

  @Post()
  @UseGuards(AuthGuard('bearer'))
  public async vote(
    @Body() vote: VoteDto,
    @Headers('authorization') authorization: string,
  ): Promise<Vote> {
    const [__, token] = authorization.split(' ');
    return this.votesService.vote(vote.userId, vote.tag, token);
  }
}
