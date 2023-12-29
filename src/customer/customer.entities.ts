import { Cart } from 'src/cart/cart.entities';
import {Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne} from 'typeorm'

@Entity()
export class Customer extends BaseEntity {
    @PrimaryGeneratedColumn()
    customer_id : number;

    @Column()
    customer_name : String;

    @Column()
    customer_address : String;
}