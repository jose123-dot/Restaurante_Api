import { BaseEntitie } from '../../Base/Entitie/BaseEntitie';
import { DescripcionItem } from '../../descripcion-item/entities/descripcion-item.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Item extends BaseEntitie {
  @Column({ length: 50, nullable: false })
  nombre: string;

  @ManyToOne(
    () => DescripcionItem,
    (descripcionItem) => descripcionItem.items,
    { nullable: false },
  )
  descripcionItem: DescripcionItem;
}
