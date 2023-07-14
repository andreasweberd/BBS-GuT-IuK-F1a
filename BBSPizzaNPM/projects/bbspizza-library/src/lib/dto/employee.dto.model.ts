import { BaseDto } from "./base.dto.model";
import { OrderDTO } from "./order.dto.model";

export interface EmployeeDTO extends BaseDto {
  firstName: string;
  lastName: string;
  orders: OrderDTO[];
}
