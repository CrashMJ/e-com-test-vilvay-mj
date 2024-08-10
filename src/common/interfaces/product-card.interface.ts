import { CartAction } from "./cart-action.interface";

export interface ProductCardInterface {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    cartAction: ({action}: CartAction) => void;
}