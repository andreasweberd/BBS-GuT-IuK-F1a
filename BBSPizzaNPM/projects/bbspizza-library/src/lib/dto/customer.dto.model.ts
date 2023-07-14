import { BaseDto } from "./base.dto.model";
import { OrderDTO } from "./order.dto.model";
import { PaymentMethodDTO } from "./payment-method.dto.model";

export interface CustomerDTO extends BaseDto {
  firstName: string;
  lastName: string;
  birthDate: Date;
  telephoneNumber: number;
  paymentPethod: PaymentMethodDTO;
  orders: OrderDTO[];
}
