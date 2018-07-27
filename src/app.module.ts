import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from './modules/users/users.module';
import { VotesModule } from './modules/votes/votes.module';
import { ApiKeysModule } from './modules/api-keys/api-key.module';
import { AuthModule } from './modules/auth/auth.module';
import { ApiKey } from './modules/api-keys/api-key.entity';
import { Vote } from './modules/votes/vote.entity';

@Module({
  imports: [
    UsersModule,
    VotesModule,
    ApiKeysModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'postgres',
      entities: [ApiKey, Vote],
    }),
  ],
})
export class AppModule {}
