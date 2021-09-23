import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Mask extends Document {
  @Prop()
  type: string;

  @Prop({
    type: 'object',
  })
  properties: {
    id: string;
    name: string;
    phone: string;
    address: string;
    mask_adult: number;
    mask_child: number;
    updated: string;
    available: string;
    note: string;
    custom_note: string;
    website: string;
    county: string;
    town: string;
    cunli: string;
    service_periods: string;
  };
  @Prop({
    type: 'object',
  })
  geometry: {
    type: string;
    coordinates: Array<number>;
  };
}
