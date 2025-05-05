import { Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CreateCargoDto } from 'src/Modules/cargo/dto/create-cargo.dto';

export class CreateEmpleadoDto {
  @ApiProperty({ example: 'Juan', maxLength: 50 })
  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  nombre: string;

  @ApiProperty({ example: 'Pérez', maxLength: 50 })
  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  apellido: string;

  @ApiProperty({ example: '1990-01-15', type: String, format: 'date' })
  @Type(() => Date)
  @IsDate()
  @IsNotEmpty()
  fecha_Nac: Date;

  @ApiProperty({ example: 'Cédula', maxLength: 20 })
  @IsString()
  @IsNotEmpty()
  @Length(1, 20)
  tipo_doc: string;

  @ApiProperty({ example: '00123456789', maxLength: 30 })
  @IsString()
  @IsNotEmpty()
  @Length(1, 30)
  No_Doc: string;

  @ApiProperty({ example: '8091234567', maxLength: 15 })
  @IsString()
  @IsNotEmpty()
  @Length(1, 15)
  telefono: string;

  @ApiProperty({ example: 'juan.perez@email.com', maxLength: 100 })
  @IsEmail()
  @IsNotEmpty()
  @Length(1, 100)
  email: string;

  @ApiPropertyOptional({ example: 'Calle Principal #45', maxLength: 255 })
  @IsString()
  @IsOptional()
  @Length(0, 255)
  direccion?: string;

  @ApiProperty({ example: 'Activo', default: 'Activo' })
  @IsString()
  @IsNotEmpty()
  estatus: string = 'Activo';

  @ApiProperty({ type: () => CreateCargoDto })
  @IsObject()
  cargo: CreateCargoDto;
}
