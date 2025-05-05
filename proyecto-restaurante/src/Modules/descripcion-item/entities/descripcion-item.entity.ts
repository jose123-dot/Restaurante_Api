import { BaseEntitie } from '../../Base/Entitie/BaseEntitie';
import { Item } from '../../item/entities/item.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class DescripcionItem extends BaseEntitie {
  @Column({ length: 50, nullable: false })
  nombre: string;

  @OneToMany(() => Item, (item) => item.descripcionItem)
  items: Item[];
}
