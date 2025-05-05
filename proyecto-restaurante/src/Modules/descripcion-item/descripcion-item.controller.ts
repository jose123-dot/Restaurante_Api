import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DescripcionItemService } from './descripcion-item.service';
import { CreateDescripcionItemDto } from './dto/create-descripcion-item.dto';
import { UpdateDescripcionItemDto } from './dto/update-descripcion-item.dto';
import { UUID } from 'crypto';

@Controller('descripcion-item')
export class DescripcionItemController {
  constructor(private readonly descripcionItemService: DescripcionItemService) {}

  @Post()
  create(@Body() createDescripcionItemDto: CreateDescripcionItemDto) {
    return this.descripcionItemService.create(createDescripcionItemDto);
  }

  @Get()
  findAll() {
    return this.descripcionItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: UUID) {
    return this.descripcionItemService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: UUID, @Body() updateDescripcionItemDto: UpdateDescripcionItemDto) {
    return this.descripcionItemService.update(id, updateDescripcionItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: UUID) {
    return this.descripcionItemService.remove(id);
  }
}
