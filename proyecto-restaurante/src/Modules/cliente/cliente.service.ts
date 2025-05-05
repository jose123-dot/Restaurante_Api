import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';
import { Repository } from 'typeorm';
import { UUID } from 'crypto';

@Injectable()
export class ClienteService {
  @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>
 async create(createClienteDto: CreateClienteDto) {
  const cliente = await this.clienteRepository.create(createClienteDto)
    return this.clienteRepository.save(cliente) ;
  }

 async findAll() {
    return  await this.clienteRepository.find();
  }

  async findOne(id: UUID) {
    return  await this.clienteRepository.findOneBy({id});
  }

  async update(id: UUID, updateClienteDto: UpdateClienteDto) {
    return await this.clienteRepository.update(id,updateClienteDto);
  }

 async remove(id: UUID) {
    return await this.clienteRepository.softDelete({id});
  }
}
