import { IsNotEmpty, IsArray, IsMongoId, IsDate } from 'class-validator';
import { PartialType, ApiProperty, OmitType } from '@nestjs/swagger';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsMongoId()
  @ApiProperty()
  readonly customer: string;

  @IsNotEmpty()
  @IsDate()
  @ApiProperty()
  readonly date: Date;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty()
  readonly products: string[];
}

export class UpdateOrderDto extends PartialType(
  OmitType(CreateOrderDto, ['products']),
) {}

export class AddProductsToOrderDto {
  @IsArray()
  @IsNotEmpty()
  readonly productsIds: string[];
}
