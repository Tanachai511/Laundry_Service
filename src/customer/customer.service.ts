import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Customer } from "./customer.entities";
import { CreateCustomerDTO, UpdateCustomerDTO } from "./customer.dto";

@Injectable()
export class CustomerService {

    constructor(
        @InjectRepository(Customer)
        private customerRepository : Repository<Customer>
    ) {

    }

    findAll() : Promise<Customer[]>{
        return this.customerRepository.find();
    }

    findOne(id:number): Promise<Customer|null>{
        return this.customerRepository.findOneBy({customer_id:id});
    }

    create(customer : CreateCustomerDTO) : Promise<Customer|null>{
        return this.customerRepository.save(customer);
    }

    update(updateCartDTO : UpdateCustomerDTO) : Promise<Customer|null>{
        return this.customerRepository.save(updateCartDTO);
    }

    async DeleteQueryBuilder(id:number) : Promise<void> {
        await this.customerRepository.delete({customer_id:id})
    }
}