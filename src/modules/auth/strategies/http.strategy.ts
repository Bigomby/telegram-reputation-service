import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-http-bearer';

import { ApiKeysService } from '../../api-keys/api-keys.service';

@Injectable()
export class HttpStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly apiKeysService: ApiKeysService) {
    super();
  }

  public async validate(token, done) {
    const apiKey = await this.apiKeysService.find(token);
    if (!apiKey) {
      return done(new UnauthorizedException(), false);
    }

    done(null, apiKey);
  }
}
