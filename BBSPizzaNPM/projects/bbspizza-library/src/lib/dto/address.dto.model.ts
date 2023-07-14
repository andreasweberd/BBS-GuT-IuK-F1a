import { BaseDto } from "./base.dto.model";

export interface AddressDTO extends BaseDto {
  customer: number;
  street: string;
  houseNumber: number;
  postCode: number;
  location: string;
}
