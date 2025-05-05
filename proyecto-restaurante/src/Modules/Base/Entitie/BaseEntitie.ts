import { Column, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export abstract class BaseEntitie {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ default: 'Activo' })
  estatus: string;

  @CreateDateColumn()
  fechaCreacion: Date;
  @UpdateDateColumn()
  fechaActualizado: Date;
  @DeleteDateColumn()
  fechaEliminado: Date;
}
