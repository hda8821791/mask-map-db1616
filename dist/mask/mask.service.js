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
exports.MaskService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const mask_interface_1 = require("../interface/mask.interface");
let MaskService = class MaskService {
    constructor(maskModel) {
        this.maskModel = maskModel;
    }
    async add(mask) {
        await mask.forEach(async (item) => {
            await this.maskModel.create(item).then(null, (err) => {
                if (err) {
                    console.log('新增失敗');
                    return '新增失敗';
                }
            });
        });
        return '新增成功';
    }
    async find(city, area) {
        const params = area !== '無'
            ? { 'properties.town': area }
            : { 'properties.county': city };
        return await this.maskModel.find(params).then((result) => {
            console.log(result);
            return result;
        }, () => {
            return '查詢失敗';
        });
    }
};
MaskService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('MASK_MODEL')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MaskService);
exports.MaskService = MaskService;
//# sourceMappingURL=mask.service.js.map