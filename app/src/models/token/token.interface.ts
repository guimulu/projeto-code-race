import { User } from './../user/user.interface';
export interface Token {
    id: number;
    token: string;
    user: User;
}