import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartController } from './cart/cart.controller';
import { CartService } from './cart/cart.service';
import { Cart } from './cart/cart.entities';
import { CustomerController } from './customer/customer.controller';
import { CustomerService } from './customer/customer.service';
import { Customer } from './customer/customer.entities';
import { Laundry } from './laundry/laundry.entities';
import { LaundryController } from './laundry/laundry.controller';
import { LaundryService } from './laundry/laundry.service';
import { PaymentController } from './payment/payment.controll';
import { PaymentService } from './payment/Payment.service';
import { Payment } from './payment/payment.entities';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports : [ConfigModule],
      useFactory : (configService : ConfigService) => {
        const option : TypeOrmModule = {
          type : "sqlite",
          database : configService.get<string>("DATABASE_NAME",'database.db'),
          entities : [Cart,Customer,Laundry,Payment],
          synchronize : true,
        };

        return option;
      },
      inject:[ConfigService]
    }),
    TypeOrmModule.forFeature([Cart,Customer,Laundry,Payment]),
  ],
  controllers: [AppController, CartController, CustomerController, LaundryController, PaymentController],
  providers: [AppService, CartService, CustomerService, LaundryService, PaymentService],
})
export class AppModule {}