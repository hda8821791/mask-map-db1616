"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mask_schema_1 = require("./schemas/mask.schema");
const models = mongoose_1.MongooseModule.forFeature([
    {
        name: 'MASK_MODEL',
        schema: mask_schema_1.MaskSchema,
    },
]);
let DbModule = class DbModule {
};
DbModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb+srv://hda8821791:a0933483022@cluster0.yfz9g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
            models,
        ],
        exports: [models],
    })
], DbModule);
exports.DbModule = DbModule;
//# sourceMappingURL=db.module.js.map