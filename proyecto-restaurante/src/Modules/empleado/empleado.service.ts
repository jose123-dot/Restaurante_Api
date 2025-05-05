import { Injectable } from '@nestjs/common';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Empleado } from './entities/empleado.entity';
import { Repository } from 'typeorm';
import { Cargo } from '../cargo/entities/cargo.entity';
import { UUID } from 'crypto';

@Injectable()
export class EmpleadoService {
  @InjectRepository(Empleado)
  private empleadoRepository: Repository<Empleado>;

  @InjectRepository(Cargo)
  private cargoRepository: Repository<Cargo>


 async create(createEmpleadoDto: CreateEmpleadoDto) {
    let cargo = await this.cargoRepository.findOne({
      where: { nombre: createEmpleadoDto.cargo.nombre },
    });

    // Si no existe, creamos una nueva cargo
    if (!cargo) {
      cargo = this.cargoRepository.create(
        createEmpleadoDto.cargo,
      );
      await this.cargoRepository.save(cargo);
    }

    // Ahora, creamos el Item y le asociamos la cargo
    const empleado = this.empleadoRepository.create({
      /* nombre: createEmpleadoDto.nombre,
      apellido: createEmpleadoDto.apellido,
      fecha_Nac: createEmpleadoDto.fecha_Nac,
      tipo_doc: createEmpleadoDto.tipo_doc,
      No_Doc: createEmpleadoDto.No_Doc,
      telefono: createEmpleadoDto.telefono,
      email: createEmpleadoDto.email,
      direccion: createEmpleadoDto.direccion,
      estatus: createEmpleadoDto.estatus, */
      ...createEmpleadoDto,
      cargo,
    });

    await this.empleadoRepository.save(empleado);

    return empleado;
  }

 async  findAll() {
    return await this.empleadoRepository.find();
  }

 async findOne(id: UUID) {
    return await this.empleadoRepository.findOneBy({id});
  }

 async update(id: UUID, updateEmpleadoDto: UpdateEmpleadoDto) {
   // Buscar empleado incluyendo la relación con cargo
   const empleado = await this.empleadoRepository.findOne({
     where: { id },
     relations: ['cargo'],
   });

   if (!empleado) {
     throw new Error('Empleado no encontrado');
   }

   // Verificar y crear el cargo si es necesario
   if (updateEmpleadoDto.cargo) {
     let cargo = await this.cargoRepository.findOne({
       where: { nombre: updateEmpleadoDto.cargo.nombre },
     });

     if (!cargo) {
       cargo = this.cargoRepository.create(updateEmpleadoDto.cargo);
       await this.cargoRepository.save(cargo);
     }

     empleado.cargo = cargo;
   }

   // Asignar otras propiedades (excepto cargo, que ya lo hicimos)
   Object.assign(empleado, {
     ...updateEmpleadoDto,
     cargo: empleado.cargo, // Asegura que usemos el cargo actualizado
   });

   // Guardar cambios
   await this.empleadoRepository.save(empleado);

   return empleado;
 }

 async remove(id: UUID) {
    return await this.empleadoRepository.softDelete({id});
  }
}
