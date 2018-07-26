import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';

import { VotesService } from '../votes/votes.service';

type Vote = { tag: string; userId: string };
type VoteCount = { tag: string; count: number };
type UserInfo = { id: string; tags: Array<VoteCount> };

@Controller('users')
export class UsersController {
  constructor(private readonly votesService: VotesService) {}

  @Get(':userId')
  public async find(@Param('userId') userId): Promise<UserInfo> {
    const votes = await this.votesService.findAll();
    const userVotes = votes.filter(vote => vote.userId === userId);

    return {
      id: userId,
      tags: userVotes.reduce(countVotes, new Array()),
    };
  }

  @Delete(':userId')
  public async deleteAllVotesFrom(@Param('userId') userId): Promise<void> {
    await this.votesService.deleteAllVotesFrom(userId);
  }
}

function countVotes(list: Array<VoteCount>, vote: Vote): Array<VoteCount> {
  const idx = list.findIndex(({ tag }) => tag === vote.tag);

  if (idx < 0) {
    list.push({ tag: vote.tag, count: 1 });
  } else {
    list[idx].count++;
  }

  return list;
}
