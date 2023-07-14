import { BaseDto } from "./base.dto.model";
import { PizzaIngredientsDTO } from "./pizza-ingredients.dto.model";

export interface PizzaDTO extends BaseDto {
  name: string;
  priceSmall: number;
  priceMedium: number;
  priceLarge: number;
  ingredients: PizzaIngredientsDTO[];
}
