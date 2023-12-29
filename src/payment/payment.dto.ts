import { Type } from "class-transformer";
import { IsDate, IsNotEmpty } from "class-validator";

export class CreatePaymentDTO {
    @IsNotEmpty()
    price : number;

    @Type(()=>Date)
    @IsDate()
    payment_date : Date;
}

export class UpdatePaymentDTO {
    @IsNotEmpty()
    payment_id : number;

    @IsNotEmpty()
    price : number;

    @Type(()=>Date)
    @IsDate()
    payment_date : Date;
}