"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaskSchema = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mask_interface_1 = require("../../interface/mask.interface");
exports.MaskSchema = mongoose_1.SchemaFactory.createForClass(mask_interface_1.Mask);
//# sourceMappingURL=mask.schema.js.map