import { IsInt, IsNotEmpty, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMesaDto {
  @ApiProperty({
    description: 'Número identificador de la mesa',
    example: 5,
  })
  @IsInt()
  @IsNotEmpty()
  Numero: number;

  @ApiProperty({
    description: 'Ubicación física de la mesa dentro del establecimiento',
    minLength: 1,
    maxLength: 255,
    example: 'Arriba',
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  ubicacion: string;

  @ApiProperty({
    description: 'Estatus actual de la mesa (por defecto "Activo")',
    example: 'Activo',
    default: 'Activo',
  })
  @IsString()
  @IsNotEmpty()
  estatus: string = 'Activo';
}
