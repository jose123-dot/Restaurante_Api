import { PartialType } from '@nestjs/mapped-types';
import { CreateDescripcionItemDto } from './create-descripcion-item.dto';

export class UpdateDescripcionItemDto extends PartialType(CreateDescripcionItemDto, {skipNullProperties:true}) {}
