import { Model } from 'mongoose';
import { Mask } from 'src/interface/mask.interface';
export declare class MaskService {
    private maskModel;
    constructor(maskModel: Model<Mask>);
    add(mask: any): Promise<string>;
    find(city: string, area?: string): Promise<string | (Mask & {
        _id: any;
    })[]>;
}
