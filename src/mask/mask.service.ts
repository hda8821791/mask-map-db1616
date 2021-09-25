import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Mask } from 'src/interface/mask.interface';

@Injectable()
export class MaskService {
  constructor(@InjectModel('MASK_MODEL') private maskModel: Model<Mask>) {}

  public async add(mask) {
    await mask.forEach(async (item: Mask) => {
      await this.maskModel.create(item).then(null, (err) => {
        if (err) {
          console.log('新增失敗');
          return '新增失敗';
        }
      });
    });
    return '新增成功';
  }

  public async find(city: string, area?: string) {
    const params =
      area !== '無'
        ? { 'properties.county': city, 'properties.town': area }
        : { 'properties.county': city };
    // console.log(area);
    return await this.maskModel.find(params).then(
      (result) => {
        console.log(result);
        return result;
      },
      () => {
        return '查詢失敗';
      },
    );
  }
}
