'use client'
import { ProductProps } from "@/common/interfaces/product.interface";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image"

// Vertical product card component
const ProductVerticalCard = ({ id, title, price, imageUrl }: ProductProps) => {
    return (
        <div className="flex flex-col border rounded-lg p-4 shadow-lg w-64">
            {/* Product Image */}
            <div className="relative w-full h-48 mb-4">
                <Image
                    src={imageUrl}
                    alt="Product Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>

            {/* Product Title */}
            <h2 className="text-sm text-gray-800 font-bold mb-2 line-clamp-2 overflow-hidden text-ellipsis two-line-title">
                {title}
            </h2>


            {/* Price and Cart Button */}
            <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-500">{process.env.CURRENCY}{price.toFixed(2)}</span>
                <button className="bg-red-400 text-white p-2 rounded-full hover:bg-red-600" onClick={() => { }}>
                    <FaShoppingCart />
                </button>
            </div>
        </div>
    );
};

export default ProductVerticalCard;