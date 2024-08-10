interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
}

interface OrderSummary {
    subtotal: number;
    tax: number;
    shipping: number;
    discount: number;
    total: number;
}

export function calculateOrderSummary(cart: CartItem[]): OrderSummary {
    const taxRate = parseFloat(process.env.NEXT_PUBLIC_TAX_RATE || "0.10"); // Default to 10% if not set
    const freeShippingThreshold = parseFloat(process.env.NEXT_PUBLIC_FREE_SHIPPING_THRESHOLD || "500"); // Default to 500 if not set
    const shippingCost = parseFloat(process.env.NEXT_PUBLIC_SHIPPING_COST || "50"); // Default to 50 if not set
    const discountThreshold = parseFloat(process.env.NEXT_PUBLIC_DISCOUNT_THRESHOLD || "1000"); // Default to 1000 if not set
    const discountAmount = parseFloat(process.env.NEXT_PUBLIC_DISCOUNT_AMOUNT || "-100"); // Default to -100 if not set

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = subtotal * taxRate;
    const shipping = subtotal == 0 ? 0 :subtotal > freeShippingThreshold ? 0 : shippingCost;
    const discount = subtotal > discountThreshold ? discountAmount : 0;
    const total = subtotal + tax + shipping + discount;

    return {
        subtotal,
        tax,
        shipping,
        discount,
        total
    };
}
