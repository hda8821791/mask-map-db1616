import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MaskSchema } from './schemas/mask.schema';

const models = MongooseModule.forFeature([
  {
    name: 'MASK_MODEL',
    schema: MaskSchema,
  },
]);

@Global()
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://hda8821791:a0933483022@cluster0.yfz9g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    models,
  ],
  exports: [models],
})
export class DbModule {}
