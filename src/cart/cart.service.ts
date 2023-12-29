import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Cart } from "./cart.entities";
import { CreateCartDTO, UpdateCartDTO } from "./cart.dto";

@Injectable()
export class CartService {

    constructor(
        @InjectRepository(Cart)
        private cartRepository : Repository<Cart>
    ) {

    }

    findAll() : Promise<Cart[]>{
        return this.cartRepository.find();
    }

    findOne(id:number): Promise<Cart|null>{
        return this.cartRepository.findOneBy({cart_id:id});
    }

    create(cart : CreateCartDTO) : Promise<Cart|null>{
        return this.cartRepository.save(cart);
    }

    update(updateCartDTO : UpdateCartDTO) : Promise<Cart|null>{
        return this.cartRepository.save(updateCartDTO);
    }

    async DeleteQueryBuilder(id:number) : Promise<void> {
        await this.cartRepository.delete({cart_id:id})
    }
}