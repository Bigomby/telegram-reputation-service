import { Controller, Post, Body, Get, UseGuards, Delete } from '@nestjs/common';

import { ApiKeysService } from './api-keys.service';
import { ApiKey } from './api-key.entity';
import { AuthGuard } from '@nestjs/passport';

const SECRET_KEY = 'secretKey';
const TTL = 3600;

@Controller('api-keys')
export class ApiKeysController {
  constructor(private readonly apiKeysService: ApiKeysService) {}

  @Get()
  @UseGuards(AuthGuard('bearer'))
  public async findAll(): Promise<Array<ApiKey>> {
    return this.apiKeysService.findAll();
  }

  @Post()
  @UseGuards(AuthGuard('bearer'))
  public async create(): Promise<ApiKey> {
    return await this.apiKeysService.create();
  }

  @Delete()
  @UseGuards(AuthGuard('bearer'))
  public async destroyAll(): Promise<void> {
    this.apiKeysService.destroyAll();
  }
}
