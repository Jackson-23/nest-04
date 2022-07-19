import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('status')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/t')
  getAppStatus(): string {
    return this.appService.getAppStatus();
  }

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
