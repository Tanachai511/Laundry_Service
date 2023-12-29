import { IsNotEmpty } from "class-validator";

export class CreateCustomerDTO {
    @IsNotEmpty()
    customer_name : String;

    @IsNotEmpty()
    customer_address : String;
}

export class UpdateCustomerDTO {
    @IsNotEmpty()
    customer_id : number;

    @IsNotEmpty()
    customer_name : String;

    @IsNotEmpty()
    customer_address : String;
}