import { Injectable } from '@nestjs/common';
import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cargo } from './entities/cargo.entity';
import { Repository } from 'typeorm';
import { UUID } from 'crypto';

@Injectable()
export class CargoService {
  @InjectRepository(Cargo)
  private cargoRepository:Repository<Cargo>
  async create(createCargoDto: CreateCargoDto) {
    const cargo = await this.cargoRepository.create(createCargoDto)
    return this.cargoRepository.save(cargo);
  }

  async findAll() {
    return await this.cargoRepository.find();
  }

  async findOne(id: UUID) {
    return await this.cargoRepository.findBy({id});
  }

  async update(id: UUID, updateCargoDto: UpdateCargoDto) {
    return await this.cargoRepository.update(id, updateCargoDto);
  }

  async remove(id: UUID) {
    return await this.cargoRepository.softDelete({id});
  }
}
