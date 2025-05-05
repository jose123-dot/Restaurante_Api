import { IsNotEmpty, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCargoDto {
  @ApiProperty({
    description: 'Nombre del cargo',
    example: 'Gerente',
    maxLength: 50,
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  nombre: string;

  @ApiProperty({
    description: 'Estado del cargo (Activo/Inactivo)',
    example: 'Activo',
    default: 'Activo',
  })
  @IsString()
  @IsNotEmpty()
  estatus: string = 'Activo';
}
