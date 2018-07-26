import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

import { JwtPayload } from './jwt-payload.interface';
import { ApiKeysService } from '../api-keys/api-keys.service';
import { ApiKey } from '../api-keys/api-key.entity';

@Injectable()
export class AuthService {
  constructor(private readonly apiKeysService: ApiKeysService) {}

  public async validateToken(token: string): Promise<ApiKey> {
    return this.apiKeysService.find(token);
  }
}
