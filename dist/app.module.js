"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const nestjs_rabbitmq_1 = require("@golevelup/nestjs-rabbitmq");
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const other_service_1 = require("./other-service/other.service");
const rpc_service_1 = require("./rpc/rpc.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_rabbitmq_1.RabbitMQModule.forRootAsync(nestjs_rabbitmq_1.RabbitMQModule, {
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
        controllers: [app_controller_1.AppController],
        providers: [rpc_service_1.RpcService, other_service_1.OtherService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map