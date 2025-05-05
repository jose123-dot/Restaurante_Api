import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateClienteDto {
  @ApiProperty({
    description: 'Nombre del cliente',
    example: 'Juan',
    maxLength: 50,
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  nombre: string;

  @ApiProperty({
    description: 'Apellido del cliente',
    example: 'Pérez',
    maxLength: 50,
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  apellido: string;

  @ApiProperty({
    description: 'Fecha de nacimiento del cliente en formato ISO 8601',
    example: '1990-01-01T00:00:00.000Z',
    type: String,
    format: 'date-time',
  })
  @Type(() => Date)
  @IsDate()
  @IsNotEmpty()
  fecha_Nac: Date;

  @ApiProperty({
    description: 'Tipo de documento de identidad del cliente',
    example: 'DNI',
    maxLength: 20,
    default: 'DNI',
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 20)
  tipo_doc: string = 'DNI';

  @ApiProperty({
    description: 'Número del documento de identidad',
    example: '12345678',
    maxLength: 30,
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 30)
  No_Doc: string;

  @ApiProperty({
    description: 'Número de teléfono del cliente',
    example: '123-456-7890',
    maxLength: 15,
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 15)
  telefono: string;

  @ApiProperty({
    description: 'Correo electrónico válido del cliente',
    example: 'cliente@ejemplo.com',
    maxLength: 100,
  })
  @IsEmail()
  @IsNotEmpty()
  @Length(1, 100)
  email: string;

  @ApiProperty({
    description: 'Dirección de residencia del cliente (opcional)',
    example: 'Calle Ficticia 123, Ciudad X',
    maxLength: 255,
    required: false,
  })
  @IsString()
  @IsOptional()
  @Length(0, 255)
  direccion?: string = 'No especificada';



  @ApiProperty({
    description: 'Estatus actual del Cliente',
    example: 'Activo',
    default: 'Activo',
  })
  @IsString()
  @IsNotEmpty()
  estatus: string = 'Activo';
}
