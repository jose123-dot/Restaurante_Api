import { Injectable } from '@nestjs/common';
import { CreateDescripcionItemDto } from './dto/create-descripcion-item.dto';
import { UpdateDescripcionItemDto } from './dto/update-descripcion-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DescripcionItem } from './entities/descripcion-item.entity';
import { Repository } from 'typeorm';
import { UUID } from 'crypto';

@Injectable()
export class DescripcionItemService {
  @InjectRepository(DescripcionItem)
  private descriptionItem: Repository<DescripcionItem>
 async create(createDescripcionItemDto: CreateDescripcionItemDto) {
    const descripcion = await this.descriptionItem.create(createDescripcionItemDto);
    return this.descriptionItem.save(descripcion);
  }

  async findAll() {
    return  await this.descriptionItem.find();
  }

 async findOne(id: UUID) {
    return await this.descriptionItem.findOneBy({id});
  }

 async update(id: UUID, updateDescripcionItemDto: UpdateDescripcionItemDto) {
    return await this.descriptionItem.update(id, updateDescripcionItemDto);
  }

async remove(id: UUID) {
    return await this.descriptionItem.softDelete({id});
  }
}
