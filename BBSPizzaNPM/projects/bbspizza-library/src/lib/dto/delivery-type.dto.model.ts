import { BaseDto } from "./base.dto.model";
import { OrderDTO } from "./order.dto.model";

export interface DeliveryMethodDTO extends BaseDto {
  name: string;
  price: number;
  order: OrderDTO;
}
