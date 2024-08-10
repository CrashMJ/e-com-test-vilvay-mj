'use client'
import { CartAction } from "@/common/interfaces/cart-action.interface";
import { Product } from "@/common/interfaces/product.interface";
import { calculateOrderSummary } from "@/common/utils/calc-order-summary.util";
import ContinueShopping from "@/components/Order/ContinueShopping";
import EmptyCartMessage from "@/components/Order/EmptyCartMessage";
import OrderSummaryCard from "@/components/Order/OrderSummaryCard";
import ProductCard from "@/components/Product/ProductCard";
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import { useCart } from "@/context/CartContext";

interface CartItem {
    id: number;
    title: string;
    price: number;
    images: string[];
  }

  // Cart page
export default function Cart() {
    const { cart, addToCart, removeFromCart, reduceFromCart } = useCart();

    console.log(cart)

    const cartActionHandler = (cartAction: CartAction, product: Product) => {
        switch (cartAction.action) {
            case "add":
                addToCart(product);
                break;
            case "remove":
                removeFromCart(product.id);
                break;
            case "reduce":
                reduceFromCart(product.id);
                break;
            default:
                throw new Error(`Unknown action: ${cartAction.action}`);
        }
    };

    // Use the utility function to calculate the order summary
    const { subtotal, tax, shipping, discount, total } = calculateOrderSummary(cart);

    return (
        <MaxWidthWrapper className={""}>
            <main className="bg-gray-50 min-h-[100vh] pb-20">
                <div className="flex flex-col pt-10 px-4 lg:px-20 ">
                    <h3 className="text-gray-900 text-2xl font-semibold">Your Cart</h3>
                </div>
                <div className="flex flex-col lg:flex-row pt-10 px-4 lg:px-20 ">
                    <div className="lg:w-[70%] w-full lg:pr-5">
                        <div className="grid grid-cols-1 sm:grid-cols-q lg:grid-cols-1 gap-4">
                            {cart.length > 0 ? (<>
                                {
                                    cart.map((item: any) => (
                                        <ProductCard
                                            key={item.id}
                                            id={item.id}
                                            title={item.title}
                                            price={item.price}
                                            imageUrl={item.images[0]}
                                            layout={"horizontal"}
                                            quantity={item.quantity}
                                            cartAction={(action) => cartActionHandler(action, item)}
                                        />
                                    ))
                                }
                                <ContinueShopping />
                                </>) : (
                                <EmptyCartMessage />
                            )}
                        </div>
                    </div>
                    <div className="lg:w-[30%] w-full lg:pl-5 mt-10 lg:mt-0">
                        <OrderSummaryCard
                            subtotal={subtotal}
                            tax={tax}
                            discount={discount}
                            total={total}
                            shipping={shipping}
                        />
                    </div>
                </div>
            </main>
        </MaxWidthWrapper>
    );
}
