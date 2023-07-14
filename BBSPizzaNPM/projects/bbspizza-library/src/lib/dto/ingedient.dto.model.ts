import { BaseDto } from "./base.dto.model";
import { PizzaIngredientsDTO } from "./pizza-ingredients.dto.model";

export interface IngredientDTO extends BaseDto {
  name: string;
  price: number;
  pizza: PizzaIngredientsDTO[];
}
