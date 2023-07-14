import { BaseDto } from "./base.dto.model";
import { CustomerDTO } from "./customer.dto.model";
import { DeliveryMethodDTO } from "./delivery-type.dto.model";
import { EmployeeDTO } from "./employee.dto.model";
import { PaymentMethodDTO } from "./payment-method.dto.model";

export interface OrderDTO extends BaseDto {
  customer: CustomerDTO;
  deliveryMethod: DeliveryMethodDTO;
  paymentMethod: PaymentMethodDTO;
  employee: EmployeeDTO;
}
