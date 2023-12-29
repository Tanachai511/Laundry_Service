import { Body, Controller, Delete, Get, Param, Post, Put, Req } from "@nestjs/common";
import { CartService } from "./cart.service";
import { Request } from "express";
import { CreateCartDTO, UpdateCartDTO } from "./cart.dto";
import { Cart } from "./cart.entities";

@Controller('cart')
export class CartController {
    constructor(private readonly cartService : CartService){
    
    }

    @Get()
    getIndex(@Req() request : Request) : Promise<Cart[]> {
        return this.cartService.findAll();
    }

    @Get(':cart_id')
    getCatById(@Param('cart_id') id : number) : Promise<Cart> {
        return this.cartService.findOne(id)
    }

    @Post()
    postCreate(@Body() createCartDTO : CreateCartDTO) : Promise<Cart> {
        return this.cartService.create(createCartDTO)
    }

    @Put(':id')
    updateCartById(@Param('id')id : number,@Body() updateCartDTO : UpdateCartDTO): Promise<Cart> {
        return this.cartService.update(updateCartDTO)
    }

    @Delete(':cart_id')
    deleteCatById(@Param('cart_id') id : number) : string {
        this.cartService.DeleteQueryBuilder(id);
        return "OK"
    }
}