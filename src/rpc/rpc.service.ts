import { RabbitRPC } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RpcService {
  @RabbitRPC({
    routingKey: 'other',
    exchange: 'chien',
    queue: 'rpc',
  })
  rpc(message: object) {
    return {
      echo: 'chien',
    };
  }

  @RabbitRPC({
    routingKey: 'abc',
    exchange: 'chien',
    queue: 'rpc',
  })
  abc(message: object) {
    return {
      echo: 'chien abc',
    };
  }

  @RabbitRPC({
    routingKey: 'abc123123',
    exchange: 'chien',
    queue: 'rpc',
  })
  abcabc(message: object) {
    return {
      echo: 'chien 123123',
    };
  }
}
