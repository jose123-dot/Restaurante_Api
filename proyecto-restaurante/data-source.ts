// data-source.ts
import { DataSource } from 'typeorm';
import { Cliente } from './src/Modules/cliente/entities/cliente.entity';
import { Cargo } from './src/Modules/cargo/entities/cargo.entity';
import { Empleado } from './src/Modules/empleado/entities/empleado.entity';
import { Mesa } from './src/Modules/mesa/entities/mesa.entity';
import { Item } from './src/Modules/item/entities/item.entity';
import { DescripcionItem } from './src/Modules/descripcion-item/entities/descripcion-item.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});
