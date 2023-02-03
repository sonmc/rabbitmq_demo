"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RpcService = void 0;
const nestjs_rabbitmq_1 = require("@golevelup/nestjs-rabbitmq");
const common_1 = require("@nestjs/common");
let RpcService = class RpcService {
    rpc(message) {
        return {
            echo: 'chien',
        };
    }
    abc(message) {
        return {
            echo: 'chien abc',
        };
    }
    abcabc(message) {
        return {
            echo: 'chien 123123',
        };
    }
};
__decorate([
    (0, nestjs_rabbitmq_1.RabbitRPC)({
        exchange: 'chien',
        queue: 'rpc',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RpcService.prototype, "rpc", null);
__decorate([
    (0, nestjs_rabbitmq_1.RabbitRPC)({
        exchange: 'chien',
        queue: 'rpc',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RpcService.prototype, "abc", null);
__decorate([
    (0, nestjs_rabbitmq_1.RabbitRPC)({
        exchange: 'chien',
        queue: 'rpc',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RpcService.prototype, "abcabc", null);
RpcService = __decorate([
    (0, common_1.Injectable)()
], RpcService);
exports.RpcService = RpcService;
//# sourceMappingURL=rpc.service.js.map