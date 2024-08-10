'use client'
import { ProductCardInterface } from "@/common/interfaces/product.interface";
import { FaShoppingCart, FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

// Horizontal product card component
const ProductHorizontalCard = ({ id, title, price, imageUrl }: ProductCardInterface) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleRemove = () => {
        // Implement remove functionality here
        console.log(`Remove product with id: ${id}`);
    };

    return (
        <div className="flex border rounded-lg p-4 shadow-lg w-full">
            {/* Product Image */}
            <div className="relative w-40 h-40 mr-4">
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
                {/* Quantity Controls & Item Remove*/}
                <div className="flex items-center justify-between">

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
                        className="bg-red-400 text-white p-2 rounded-full hover:bg-red-600"
                        onClick={handleRemove}
                    >
                        <FaTrash />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductHorizontalCard;
