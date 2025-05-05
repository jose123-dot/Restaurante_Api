import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MesaService } from './mesa.service';
import { CreateMesaDto } from './dto/create-mesa.dto';
import { UpdateMesaDto } from './dto/update-mesa.dto';
import { ApiTags } from '@nestjs/swagger';
import { UUID } from 'crypto';

@ApiTags('mesa')
@Controller('mesa')
export class MesaController {
  constructor(private readonly mesaService: MesaService) {}

  @Post()
  create(@Body() createMesaDto: CreateMesaDto) {
    return this.mesaService.create(createMesaDto);
  }

  @Get()
  findAll() {
    return this.mesaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: UUID) {
    return this.mesaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: UUID, @Body() updateMesaDto: UpdateMesaDto) {
    return this.mesaService.update(id, updateMesaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: UUID) {
    return this.mesaService.remove(id);
  }
}
