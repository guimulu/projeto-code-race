import { ProductType } from '../product-type/product-type.interface';
import { Unit } from '../unit/unit.interface';

export interface Product {
    id: number;
    quantity: number;
    productType: ProductType;
    unit: Unit;
}