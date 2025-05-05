import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, Length } from 'class-validator';

export class CreateDescripcionItemDto {
  @ApiProperty({
    description: 'Nombre del elemento',
    minLength: 1,
    maxLength: 50,
    example: 'Juan Pérez',
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  nombre: string;

  @ApiProperty({
    description: 'Estatus del elemento (por defecto "Activo")',
    default: 'Activo',
    example: 'Activo',
  })
  @IsString()
  @IsNotEmpty()
  estatus: string = 'Activo';
}
