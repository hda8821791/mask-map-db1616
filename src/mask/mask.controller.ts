import {
  Body,
  Controller,
  Get,
  Header,
  Param,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { MaskService } from './mask.service';
import * as mask from 'src/mask.json';
import { ApiProperty } from '@nestjs/swagger';
interface Map {
  city: string;
  area: string;
}

@Controller('mask')
export class MaskController {
  constructor(private maskService: MaskService) {}
  @Post('add')
  public async add() {
    return await this.maskService.add(mask);
  }

  @ApiProperty({
    required: false,
  })
  @Get('/:city/:area')
  public async find(@Param('city') city: string, @Param('area') area: string) {
    console.log(city);
    console.log(area);
    return await this.maskService.find(city, area);
  }
}
