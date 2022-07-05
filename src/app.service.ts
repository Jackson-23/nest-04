import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppStatus(): string {
    return 'Server ON!!! 🐱‍🏍\n Access in http://localhost:3535';
  }
  getHello(): string {
    return 'World';
  }
}
