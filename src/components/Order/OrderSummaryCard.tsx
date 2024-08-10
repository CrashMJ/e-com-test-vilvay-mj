'use client'

interface OrderSummaryInterface {
    subtotal: number;
    shipping: number;
    tax: number;
    discount: number;
    total: number;
}

// Order summary card component
const OrderSummaryCard = ({ subtotal, shipping, tax, discount, total }: OrderSummaryInterface) => {
    return (
        <div className="border rounded-lg p-6 shadow-lg w-full max-w-md bg-white">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h3>

            {/* Subtotal */}
            <div className="flex justify-between mb-2">
                <span className="text-gray-700 text-left">Subtotal:</span>
                <span className="text-gray-900 text-right">{process.env.NEXT_PUBLIC_CURRENCY}{subtotal.toFixed(2)}</span>
            </div>

            {/* Shipping */}
            <div className="flex justify-between mb-2">
                <span className="text-gray-700 text-left">Shipping:</span>
                <span className="text-gray-900 text-right">{process.env.NEXT_PUBLIC_CURRENCY}{shipping.toFixed(2)}</span>
            </div>

            {/* Tax */}
            <div className="flex justify-between mb-2">
                <span className="text-gray-700 text-left">Tax:</span>
                <span className="text-gray-900 text-right">{process.env.NEXT_PUBLIC_CURRENCY}{tax.toFixed(2)}</span>
            </div>

            {/* Discount */}
            <div className="flex justify-between mb-4">
                <span className="text-gray-700 text-left">Discount:</span>
                <span className="text-gray-900 text-right">{process.env.NEXT_PUBLIC_CURRENCY}{discount.toFixed(2)}</span>
            </div>

            {/* Horizontal Line */}
            <hr className="border-t border-gray-300 mb-4" />

            {/* Total */}
            <div className="flex justify-between font-bold text-lg">
                <span className="text-gray-900 text-left">Total:</span>
                <span className="text-gray-900 text-right">{process.env.NEXT_PUBLIC_CURRENCY}{total.toFixed(2)}</span>
            </div>

            <div className="flex justify-between font-bold text-lg mt-5">
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                    Checkout
                </button>
            </div>

        </div>
    );
};

export default OrderSummaryCard;