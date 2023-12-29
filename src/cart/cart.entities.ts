import { Customer } from 'src/customer/customer.entities';
import { Laundry } from 'src/laundry/laundry.entities';
import {Entity, Column, PrimaryGeneratedColumn, BaseEntity,OneToMany, ManyToOne, JoinColumn} from 'typeorm'

@Entity()
export class Cart extends BaseEntity {
    @PrimaryGeneratedColumn()
    cart_id : number;

    @ManyToOne(()=> Laundry, (laundry) => laundry.laundry_id ,{
        eager : true
    })
    laundry : Laundry;

    @ManyToOne(()=> Customer, (customer) => customer.customer_id ,{
        eager : true
    })
    customer : Customer;
}