import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersController } from './users.controller';
import { VotesModule } from '../votes/votes.module';

@Module({
  imports: [VotesModule],
  controllers: [UsersController],
})
export class UsersModule {}
