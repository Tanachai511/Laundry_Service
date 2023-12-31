import { Body, Controller, Delete, Get, Param, Post, Put, Req } from "@nestjs/common";
import { PaymentService } from "./Payment.service";
import { Request } from "express";
import { CreatePaymentDTO, UpdatePaymentDTO } from "./Payment.dto";
import { Payment } from "./Payment.entities";

@Controller('payment')
export class PaymentController {
    constructor(private readonly paymentService : PaymentService){
    
    }

    @Get()
    getIndex(@Req() request : Request) : Promise<Payment[]> {
        return this.paymentService.findAll();
    }

    @Get(':payment_id')
    getCatById(@Param('payment_id') id : number) : Promise<Payment> {
        return this.paymentService.findOne(id)
    }

    @Post()
    postCreate(@Body() createPaymentDTO : CreatePaymentDTO) : Promise<Payment> {
        return this.paymentService.create(createPaymentDTO)
    }

    @Put(':payment_id')
    updatePaymentById(@Param('payment_id')id : number,@Body() updatePaymentDTO : UpdatePaymentDTO): Promise<Payment> {
        return this.paymentService.update(updatePaymentDTO)
    }

    @Delete(':payment_id')
    deletePaymentById(@Param('payment_id') id : number) : string {
        this.paymentService.DeleteQueryBuilder(id);
        return "OK"
    }
}