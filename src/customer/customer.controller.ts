import { Body, Controller, Delete, Get, Param, Post, Put, Req } from "@nestjs/common";
import { CustomerService } from "./customer.service";
import { Request } from "express";
import { CreateCustomerDTO, UpdateCustomerDTO } from "./customer.dto";
import { Customer } from "./customer.entities";

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService : CustomerService){
    
    }

    @Get()
    getIndex(@Req() request : Request) : Promise<Customer[]> {
        return this.customerService.findAll();
    }

    @Get(':customer_id')
    getCatById(@Param('customer_id') id : number) : Promise<Customer> {
        return this.customerService.findOne(id)
    }

    @Post()
    postCreate(@Body() createCustomerDTO : CreateCustomerDTO) : Promise<Customer> {
        return this.customerService.create(createCustomerDTO)
    }

    @Put(':customer_id')
    updateCustomerById(@Param('customer_id')id : number,@Body() updateCustomerDTO : UpdateCustomerDTO): Promise<Customer> {
        return this.customerService.update(updateCustomerDTO)
    }

    @Delete(':customer_id')
    deleteCatById(@Param('customer_id') id : number) : string {
        this.customerService.DeleteQueryBuilder(id);
        return "OK"
    }
}