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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaskController = void 0;
const common_1 = require("@nestjs/common");
const mask_service_1 = require("./mask.service");
const mask = require("../mask.json");
const swagger_1 = require("@nestjs/swagger");
let MaskController = class MaskController {
    constructor(maskService) {
        this.maskService = maskService;
    }
    async add() {
        return await this.maskService.add(mask);
    }
    async find(city, area) {
        console.log(city);
        console.log(area);
        return await this.maskService.find(city, area);
    }
};
__decorate([
    (0, common_1.Post)('add'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MaskController.prototype, "add", null);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
    }),
    (0, common_1.Get)('/:city/:area'),
    __param(0, (0, common_1.Param)('city')),
    __param(1, (0, common_1.Param)('area')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], MaskController.prototype, "find", null);
MaskController = __decorate([
    (0, common_1.Controller)('mask'),
    __metadata("design:paramtypes", [mask_service_1.MaskService])
], MaskController);
exports.MaskController = MaskController;
//# sourceMappingURL=mask.controller.js.map