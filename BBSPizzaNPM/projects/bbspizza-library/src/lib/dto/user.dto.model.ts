import { BaseDto } from "./base.dto.model";
import { CustomerDTO } from "./customer.dto.model";

export interface UserDTO extends BaseDto {
  name: string;
  password: string;
  customer: CustomerDTO;
}
