import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Laundry } from "./laundry.entities";
import { CreateLaundryDTO, UpdateLaundryDTO } from "./laundry.dto";

@Injectable()
export class LaundryService {

    constructor(
        @InjectRepository(Laundry)
        private laundryRepository : Repository<Laundry>
    ) {

    }

    findAll() : Promise<Laundry[]>{
        return this.laundryRepository.find();
    }

    findOne(id:number): Promise<Laundry|null>{
        return this.laundryRepository.findOneBy({laundry_id:id});
    }

    create(laundry : CreateLaundryDTO) : Promise<Laundry|null>{
        return this.laundryRepository.save(laundry);
    }

    update(updateLaundryDTO : UpdateLaundryDTO) : Promise<Laundry|null>{
        return this.laundryRepository.save(updateLaundryDTO);
    }

    async DeleteQueryBuilder(id:number) : Promise<void> {
        await this.laundryRepository.delete({laundry_id:id})
    }
}