import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as hat from 'hat';

import { ApiKey } from './api-key.entity';

const DEFAULT_TTL = 604800;

@Injectable()
export class ApiKeysService {
  constructor(
    @InjectRepository(ApiKey) private readonly repository: Repository<ApiKey>,
  ) {}

  public async findAll(): Promise<Array<ApiKey>> {
    return this.repository.find();
  }

  public async find(id: string): Promise<ApiKey> {
    return this.repository.findOne({ id });
  }

  public async create(): Promise<ApiKey> {
    const apiKey = new ApiKey();
    apiKey.id = hat();
    apiKey.ttl = DEFAULT_TTL;

    return this.repository.save(apiKey);
  }

  public async destroyAll(): Promise<void> {
    this.repository.clear();
  }
}
