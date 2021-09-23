import { MaskService } from './mask.service';
export declare class MaskController {
    private maskService;
    constructor(maskService: MaskService);
    add(): Promise<string>;
    find(city: string, area: string): Promise<string | (import("../interface/mask.interface").Mask & {
        _id: any;
    })[]>;
}
