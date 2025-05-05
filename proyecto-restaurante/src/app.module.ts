import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './Modules/cliente/entities/cliente.entity';
import { Empleado } from './Modules/empleado/entities/empleado.entity';
import { Cargo } from './Modules/cargo/entities/cargo.entity';
import { Item } from './Modules/item/entities/item.entity';
import { DescripcionItem } from './Modules/descripcion-item/entities/descripcion-item.entity';
import { ClienteModule } from './Modules/cliente/cliente.module';
import { CargoModule } from './Modules/cargo/cargo.module';
import { MesaModule } from './Modules/mesa/mesa.module';
import { Mesa } from './Modules/mesa/entities/mesa.entity';
import { DescripcionItemModule } from './Modules/descripcion-item/descripcion-item.module';
import { ConfigModule } from '@nestjs/config';
import { ItemModule } from './Modules/item/item.module';
import { EmpleadoModule } from './Modules/empleado/empleado.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:['enviroment.env'],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [Cliente, Cargo, Empleado, DescripcionItem, Mesa, Item],
      autoLoadEntities: true,
      synchronize: false,
    }),
    ClienteModule,
    CargoModule,
    MesaModule,
    DescripcionItemModule,
    ItemModule,
    EmpleadoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
