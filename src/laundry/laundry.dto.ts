import { Type } from "class-transformer";
import { IsDate, IsNotEmpty } from "class-validator";

export class CreateLaundryDTO {
    @IsNotEmpty()
    type_service : String;

    @IsNotEmpty()
    customer_phone : number;

    @Type(()=>Date)
    @IsDate()
    delivery_date : Date;

    @Type(()=>Date)
    @IsDate()
    date_received : Date;
}

export class UpdateLaundryDTO {
    @IsNotEmpty()
    laundry_id : number;

    @IsNotEmpty()
    type_service : String;

    @IsNotEmpty()
    customer_phone : number;

    @Type(()=>Date)
    @IsDate()
    delivery_date : Date;

    @Type(()=>Date)
    @IsDate()
    date_received : Date;
}