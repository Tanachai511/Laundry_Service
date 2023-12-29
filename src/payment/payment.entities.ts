import { Laundry } from 'src/laundry/laundry.entities';
import {Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToOne, JoinColumn} from 'typeorm'

@Entity()
export class Payment extends BaseEntity {
    @PrimaryGeneratedColumn()
    payment_id : number;

    @Column()
    price : number;

    @Column()
    payment_date : Date;

    @OneToOne(() => Laundry, {
        eager:true
    })
    @JoinColumn()
    laundry : Laundry;
}