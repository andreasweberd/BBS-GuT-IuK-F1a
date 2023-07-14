import { BaseDto } from "./base.dto.model";
import { CustomerDTO } from "./customer.dto.model";
import { OrderDTO } from "./order.dto.model";

export interface PaymentMethodDTO extends BaseDto {
  name: string;
  customers: CustomerDTO[];
  orders: OrderDTO[];
}
