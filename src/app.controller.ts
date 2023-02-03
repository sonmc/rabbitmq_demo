import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  @Get('sonmc')
  async goSonMc() {
    return this.amqpConnection.request({
      exchange: 'sonmc2',
      routingKey: 'other',
    });
  }

  @Get('chien')
  async goChien() {
    return this.amqpConnection.request({
      exchange: 'chien',
      routingKey: 'abc',
    });
  }
}
