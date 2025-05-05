import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, Length, IsObject } from 'class-validator';
import { CreateDescripcionItemDto } from 'src/Modules/descripcion-item/dto/create-descripcion-item.dto';
export class CreateItemDto {
  
  @ApiProperty({
    description: 'Nombre del item',
    example: 'Item de ejemplo',
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  nombre: string;

  @ApiProperty({
    description: 'Estatus actual del Item',
    example: 'Activo',
    default: 'Activo',
  })
  @IsString()
  @IsNotEmpty()
  estatus: string = 'Activo';

  @ApiProperty({
    description: 'Descripción del item',
    type: CreateDescripcionItemDto,
    example: { nombre: 'Postre'},
  })
  @IsObject()
  descripcionItem: CreateDescripcionItemDto;
}
