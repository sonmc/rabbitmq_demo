import { RabbitRPC } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OtherService {
  @RabbitRPC({
    routingKey: 'other',
    exchange: 'sonmc2',
    queue: 'other',
  })
  otherService(message: object) {
    return {
      echo: 'sonmc',
    };
  }
}
