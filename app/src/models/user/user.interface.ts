import { City } from "../city/city.interface";
import { Producer } from "../producer/producer.interface";
import { Consumer } from "../consumer/consumer.interface";

export interface User {
    id: number;
    login: string;
    password: string;
    email: string;
    city: City;
    producer?: Producer;
    consumer?: Consumer;
}