import { BaseEntitie } from '../../Base/Entitie/BaseEntitie';
import { Column, Entity } from 'typeorm';

@Entity()
export class Mesa extends BaseEntitie {
  @Column()
  Numero: number;

  @Column({ length: 20, nullable: false })
  ubicacion: string;

}
