import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from './users/users.module';
import { VotesModule } from './votes/votes.module';
import { ApiKeysModule } from './api-keys/api-key.module';
import { AuthModule } from './auth/auth.module';

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
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    }),
  ],
})
export class AppModule {}
