import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaskModule } from './mask/mask.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [MaskModule, DbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
