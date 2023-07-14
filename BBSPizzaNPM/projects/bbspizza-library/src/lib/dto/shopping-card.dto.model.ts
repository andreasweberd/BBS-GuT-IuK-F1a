import { BaseDto } from "./base.dto.model";

export interface ShoppingCardDTO extends BaseDto {
  pizza: number;
  size: string;
  order: number;
}
