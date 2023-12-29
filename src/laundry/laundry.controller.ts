import { Body, Controller, Delete, Get, Param, Post, Put, Req } from "@nestjs/common";
import { LaundryService } from "./laundry.service";
import { Request } from "express";
import { CreateLaundryDTO, UpdateLaundryDTO } from "./laundry.dto";
import { Laundry } from "./laundry.entities";

@Controller('laundry')
export class LaundryController {
    constructor(private readonly laundryService : LaundryService){
    
    }

    @Get()
    getIndex(@Req() request : Request) : Promise<Laundry[]> {
        return this.laundryService.findAll();
    }

    @Get(':laundry_id')
    getCatById(@Param('laundry_id') id : number) : Promise<Laundry> {
        return this.laundryService.findOne(id)
    }

    @Post()
    postCreate(@Body() createlaundryDTO : CreateLaundryDTO) : Promise<Laundry> {
        return this.laundryService.create(createlaundryDTO)
    }

    @Put(':id')
    updateLaundryById(@Param('laundry_id')id : number,@Body() updatelaundryDTO : UpdateLaundryDTO): Promise<Laundry> {
        return this.laundryService.update(updatelaundryDTO)
    }

    @Delete(':laundry_id')
    deleteCatById(@Param('laundry_id') id : number) : string {
        this.laundryService.DeleteQueryBuilder(id);
        return "OK"
    }
}