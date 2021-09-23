import { Document } from 'mongoose';
export declare class Mask extends Document {
    type: string;
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
    geometry: {
        type: string;
        coordinates: Array<number>;
    };
}
