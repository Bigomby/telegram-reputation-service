import { Module } from '@nestjs/common';

import { HttpStrategy } from './strategies/http.strategy';
import { ApiKeysModule } from '../api-keys/api-key.module';

@Module({
  imports: [ApiKeysModule],
  providers: [HttpStrategy],
})
export class AuthModule {}
