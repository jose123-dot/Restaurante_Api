import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { Repository } from 'typeorm';
import { DescripcionItem } from '../descripcion-item/entities/descripcion-item.entity';
import { UUID } from 'crypto';

@Injectable()
export class ItemService {
  @InjectRepository(Item)
  private itemRepository:Repository<Item>;

  @InjectRepository(DescripcionItem)
  private descripcionItemRepository: Repository<DescripcionItem>

  async create(createItemDto: CreateItemDto) {

     let descripcionItem = await this.descripcionItemRepository.findOne({
       where: { nombre: createItemDto.descripcionItem.nombre },
     });

     // Si no existe, creamos una nueva DescripcionItem
     if (!descripcionItem) {
       descripcionItem = this.descripcionItemRepository.create(
         createItemDto.descripcionItem,
       );
       await this.descripcionItemRepository.save(descripcionItem);
     }

     // Ahora, creamos el Item y le asociamos la descripcionItem
     const item = this.itemRepository.create({
       nombre: createItemDto.nombre,
       descripcionItem,
     });

     await this.itemRepository.save(item);

     return item;
  }

  async findAll() {
    return  await this.itemRepository.find();
  }

  async findOne(id: UUID) {
    return await this.itemRepository.findOneBy({id});
  }

  async update(id: UUID, updateItemDto: UpdateItemDto) {
    // Buscar el Item que se va a actualizar, incluyendo la relación 'descripcionItem'
    const item = await this.itemRepository.findOne({
      where: { id }, // Buscar por ID
      relations: ['descripcionItem'], // Incluir la relación descripcionItem
    });

    if (!item) {
      throw new Error('Item no encontrado');
    }

    // Si la descripción ha cambiado, buscamos o creamos la nueva descripción
    if (updateItemDto.descripcionItem) {
      let descripcionItem = await this.descripcionItemRepository.findOne({
        where: { nombre: updateItemDto.descripcionItem.nombre },
      });

      if (!descripcionItem) {
        descripcionItem = this.descripcionItemRepository.create(
          updateItemDto.descripcionItem,
        );
        await this.descripcionItemRepository.save(descripcionItem);
      }

      // Actualizamos la relación con la nueva DescripcionItem
      item.descripcionItem = descripcionItem;
    }

    // Actualizamos el nombre del Item si ha cambiado
    if (updateItemDto.nombre) {
      item.nombre = updateItemDto.nombre;
    }

    // Guardamos el Item actualizado
    await this.itemRepository.save(item);

    return item;
  }

  async remove(id: UUID) {
    return await this.itemRepository.softDelete({id});
  }
}
