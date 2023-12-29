import { Type } from "class-transformer";
import { IsNotEmpty, ValidateNested } from "class-validator";
import { Customer } from "src/customer/customer.entities";

export class CreateCartDTO {
    @IsNotEmpty()
    cart_id : number;

    @ValidateNested({ each : true})
    @Type(() => Customer)
    customer_id : Customer
}

export class UpdateCartDTO {
    @IsNotEmpty()
    cart_id : number;
}