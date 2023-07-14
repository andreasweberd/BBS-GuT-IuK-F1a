import { BaseDto } from "./base.dto.model";
import { IngredientDTO } from "./ingedient.dto.model";
import { PizzaDTO } from "./pizza.dto.model";

export interface PizzaIngredientsDTO extends BaseDto {
  pizza: PizzaDTO;
  ingredient: IngredientDTO;
}
