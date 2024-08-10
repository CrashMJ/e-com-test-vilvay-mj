'use client';

import { useState } from "react";
import { FaShoppingCart, FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";
import Image from "next/image";
import { ProductCardInterface } from "@/common/interfaces/product-card.interface";

interface ProductCardProps extends ProductCardInterface {
    layout: "vertical" | "horizontal";
}

const ProductCard = ({ id, title, price, imageUrl, cartAction, layout }: ProductCardProps) => {
    const [isAdded, setIsAdded] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        setIsAdded(true);
        cartAction({ action: "add" });
        setTimeout(() => {
            setIsAdded(false);
        }, 3000);
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
        cartAction({ action: "add" });
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            cartAction({ action: "reduce" });
        }
    };

    const handleRemove = () => {
        cartAction({ action: "remove" });
    };

    return (
        <div
            className={`flex ${
                layout === "vertical" ? "flex-col" : "flex-row flex-wrap sm:flex-nowrap"
            } border rounded-lg p-4 shadow-lg w-full`}
        >
            {/* Product Image */}
            <div
                className={`relative ${
                    layout === "vertical" ? "w-full h-48 mb-4" : "w-full sm:w-40 h-40 mb-4 sm:mb-0 sm:mr-4"
                }`}
            >
                <Image
                    src={imageUrl}
                    alt="Product Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-between flex-grow">
                <h2 className="text-sm text-gray-800 font-bold mb-2 line-clamp-2 overflow-hidden text-ellipsis two-line-title">
                    {title}
                </h2>
                <span className="text-sm font-semibold text-gray-500">
                    {process.env.NEXT_PUBLIC_CURRENCY}{price.toFixed(2)}
                </span>

                {layout === "vertical" ? (
                    <div className="flex items-center justify-between mt-auto">
                        {isAdded ? (
                            <MdCheckCircle className="text-green-500 animate-pulse" size={32} />
                        ) : (
                            <button
                                className="bg-red-400 text-white p-2 rounded-full hover:bg-red-600 ml-auto"
                                onClick={handleAddToCart}
                            >
                                <FaShoppingCart />
                            </button>
                        )}
                    </div>
                ) : (
                    <div className="flex items-center justify-between mt-4 flex-wrap">
                        <div className="flex items-center space-x-2">
                            <button
                                className="bg-gray-300 text-gray-800 p-2 rounded-full hover:bg-gray-400"
                                onClick={handleDecrease}
                            >
                                <FaMinus />
                            </button>
                            <span className="text-sm font-semibold text-blue-500">{quantity}</span>
                            <button
                                className="bg-gray-300 text-gray-800 p-2 rounded-full hover:bg-gray-400"
                                onClick={handleIncrease}
                            >
                                <FaPlus />
                            </button>
                        </div>
                        <button
                            className="bg-red-400 text-white p-2 rounded-full hover:bg-red-600 mt-2 sm:mt-0"
                            onClick={handleRemove}
                        >
                            <FaTrash />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
