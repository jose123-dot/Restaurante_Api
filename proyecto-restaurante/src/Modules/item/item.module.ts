import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { Item } from './entities/item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DescripcionItem } from '../descripcion-item/entities/descripcion-item.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Item, DescripcionItem])],
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}
