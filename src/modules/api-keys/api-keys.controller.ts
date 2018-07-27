import { Controller, Post, Get, UseGuards, Delete } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { ApiKeysService } from './api-keys.service';
import { AdminGuard } from '../../guards/admin.guard';
import { ApiKey } from './api-key.entity';

@Controller('api-keys')
@UseGuards(AdminGuard)
export class ApiKeysController {
  constructor(private readonly apiKeysService: ApiKeysService) {}

  @Get()
  public async findAll(): Promise<Array<ApiKey>> {
    return this.apiKeysService.findAll();
  }

  @Post()
  public async create(): Promise<ApiKey> {
    return this.apiKeysService.create();
  }

  @Delete()
  public async destroyAll(): Promise<void> {
    this.apiKeysService.destroyAll();
  }
}
