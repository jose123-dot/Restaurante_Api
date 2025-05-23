import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CargoService } from './cargo.service';
import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';
import { ApiTags } from '@nestjs/swagger';
import { UUID } from 'crypto';
@ApiTags('cargo')
@Controller('cargo')
export class CargoController {
  constructor(private readonly cargoService: CargoService) {}

  @Post()
  create(@Body() createCargoDto: CreateCargoDto) {
    return this.cargoService.create(createCargoDto);
  }

  @Get()
  findAll() {
    return this.cargoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: UUID) {
    return this.cargoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: UUID, @Body() updateCargoDto: UpdateCargoDto) {
    return this.cargoService.update(id, updateCargoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: UUID) {
    return this.cargoService.remove(id);
  }
}
