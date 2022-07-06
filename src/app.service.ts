import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppStatus(): string {
    return 'Server ON!!! 🐱‍🏍\n Access in http://localhost:3535/api';
  }
  getHello(): string {
    return 'World';
  }
}
