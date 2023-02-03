import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
export declare class AppController {
    private readonly amqpConnection;
    constructor(amqpConnection: AmqpConnection);
    goSonMc(): Promise<unknown>;
    goChien(): Promise<unknown>;
}
