import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { OtherService } from './other-service/other.service';
import { RpcService } from './rpc/rpc.service';

@Module({
  imports: [
    RabbitMQModule.forRootAsync(RabbitMQModule, {
      useFactory: () => ({
        exchanges: [
          {
            name: 'sonmc2',
            type: 'topic',
          },
          {
            name: 'chien',
            type: 'topic',
          },
        ],
        uri: `amqp://user:password@localhost:5672`,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [RpcService, OtherService],
})
export class AppModule {}
