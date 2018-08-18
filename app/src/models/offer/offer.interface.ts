import { Unit } from './../unit/unit.interface';
import { Product } from './../product/product.interface';
import { Producer } from './../producer/producer.interface';

export interface Offer {
    id: number,
    quantity: number,
    producer: Producer,
    product: Product,
    unit: Unit
}