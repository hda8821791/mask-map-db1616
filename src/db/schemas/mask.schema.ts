import { SchemaFactory } from '@nestjs/mongoose';
import { Mask } from 'src/interface/mask.interface';

export const MaskSchema = SchemaFactory.createForClass(Mask);
