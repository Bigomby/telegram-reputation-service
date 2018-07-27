import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class AdminGuard implements CanActivate {
  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const { headers } = context.switchToHttp().getRequest();

    if (headers.authorization === process.env.ADMIN_API_KEY) {
      return true;
    }

    return false;
  }
}
