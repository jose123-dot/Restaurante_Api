import { Module } from '@nestjs/common';
import { DescripcionItemService } from './descripcion-item.service';
import { DescripcionItemController } from './descripcion-item.controller';
import { DescripcionItem } from './entities/descripcion-item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([DescripcionItem])],
  controllers: [DescripcionItemController],
  providers: [DescripcionItemService],
})
export class DescripcionItemModule {}
