import { Customer } from 'src/customer/customer.entities';
import {Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne} from 'typeorm'

@Entity()
export class Laundry extends BaseEntity {
    @PrimaryGeneratedColumn()
    laundry_id : number;

    @Column()
    type_service : String;

    @Column()
    customer_phone : number;

    @Column()
    delivery_date : Date;

    @Column()
    date_received : Date;

    @ManyToOne(()=> Customer, (customer) => customer.customer_id ,{
        eager : true
    })
    customer : Customer;
}