import { Injectable } from '@nestjs/common';
import { CreateMesaDto } from './dto/create-mesa.dto';
import { UpdateMesaDto } from './dto/update-mesa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mesa } from './entities/mesa.entity';
import { UUID } from 'crypto';

@Injectable()
export class MesaService {
  @InjectRepository(Mesa)
  private mesaRepository: Repository<Mesa>
async  create(createMesaDto: CreateMesaDto) {
   const mesa = await this.mesaRepository.create(createMesaDto)
    return this.mesaRepository.save(mesa);
  }

async findAll() {
    return await this.mesaRepository.find();
  }

async findOne(id: UUID) {
    return await this.mesaRepository.findOneBy({id});
  }

async update(id: UUID, updateMesaDto: UpdateMesaDto) {
    return await this.mesaRepository.update(id, updateMesaDto);
  }

async remove(id: UUID) {
    return await this.mesaRepository.softDelete({id});
  }
}
