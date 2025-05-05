import { PersonaEntitie } from "../../Base/Entitie/PersonEntitie";
import { Cargo } from "../../cargo/entities/cargo.entity";
import { Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity()
export class Empleado extends PersonaEntitie {
  @ManyToOne(() => Cargo, (cargo) => cargo.empleados, { nullable: false })
  cargo: Cargo;
}
