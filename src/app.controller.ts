import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './service/user.service';
import { StayerService } from './service/stayer.service';

@Controller()
export class AppController {
  constructor(
    private readonly userService: UserService,
    private readonly stayerService: StayerService,
    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
