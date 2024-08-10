import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "@/context/CartContext";

const EmptyCartMessage = () => {
    const { cart } = useCart();

    if (cart.length > 0) {
        return null; // Do not display the message if the cart has items
    }

    return (
        <div className="flex flex-col items-center justify-center h-64 text-gray-500">
            <FaShoppingCart className="text-6xl mb-4" />
            <h3 className="text-xl font-semibold">Your cart is empty</h3>
            <p className="text-sm">Browse our categories and discover our best deals!</p>
        </div>
    );
};

export default EmptyCartMessage;
