import { Module } from '@nestjs/common';

import { AuthService } from './auth.service';
import { HttpStrategy } from './http.strategy';
import { ApiKeysModule } from '../api-keys/api-key.module';

@Module({
  imports: [ApiKeysModule],
  providers: [AuthService, HttpStrategy],
})
export class AuthModule {}
