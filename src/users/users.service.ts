import { Inject, Injectable } from '@nestjs/common';
import { Client } from 'pg';

@Injectable()
export class UsersService {
  constructor(@Inject('PG') private clientPg: Client) {}

  getTasks() {
    return new Promise((resolve, reject) => {
      this.clientPg.query('SELECT * FROM tasks', (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res.rows);
      });
    });
  }
}
