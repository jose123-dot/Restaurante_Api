import { Column } from "typeorm";
import { BaseEntitie } from "./BaseEntitie";

export abstract class PersonaEntitie extends BaseEntitie {
  @Column({ length: 50, nullable: false })
  nombre: string;

  @Column({ length: 50, nullable: false })
  apellido: string;

  @Column({ type: 'date', nullable: false })
  fecha_Nac: Date;

  @Column({ length: 20, nullable: false })
  tipo_doc: string;

  @Column({ length: 30, nullable: false, unique: true })
  No_Doc: string;

  @Column({ length: 15, nullable: false })
  telefono: string;

  @Column({ length: 100, nullable: false, unique: true })
  email: string;

  @Column({ length: 255, nullable: true })
  direccion: string;
}