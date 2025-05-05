
import { BaseEntitie } from "../../Base/Entitie/BaseEntitie";
import { Empleado } from "../../empleado/entities/empleado.entity";
import {  Column, Entity, OneToMany } from "typeorm";
@Entity()
export class Cargo extends BaseEntitie {
  @Column({ length: 50, nullable: false })
  nombre: string;

  @OneToMany(() => Empleado, (empleado) => empleado.cargo)
  empleados: Empleado[];
}
