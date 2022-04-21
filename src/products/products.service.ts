import { Inject, Injectable } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config'; //inject ConfigService
import config from '../config';

@Injectable()
export class ProductsService {
  constructor(
    private configService2: ConfigService, //inject ConfigService
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  findAll() {
    const apiKey = this.configService2.get('API_KEY'); // 👈 get API_KEY from .env
    const dbName = this.configService2.get('DATABASE_NAME'); // 👈 get DATABASE_NAME from .env
    const psName = this.configService.postgres.dbName;
    const dbPort = this.configService.postgres.port;
    console.log(apiKey, dbName, psName, dbPort);
    return { apiKey, dbName, psName, dbPort };
  }
}
