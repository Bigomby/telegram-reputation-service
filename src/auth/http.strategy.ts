import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-http-bearer';

import { AuthService } from './auth.service';
import { JwtPayload } from './jwt-payload.interface';

const SECRET_KEY = 'secretKey';

@Injectable()
export class HttpStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  public async validate(token, done) {
    const apiKey = await this.authService.validateToken(token);
    if (!apiKey) {
      return done(new UnauthorizedException(), false);
    }

    done(null, apiKey);
  }
}
