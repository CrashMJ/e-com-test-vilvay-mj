'use client'
import { products } from "@/common/data/products.data";
import OrderSummaryCard from "@/components/Order/OrderSummaryCard";
import ProductHorizontalCard from "@/components/Product/ProductHorizontalCard";
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import { useState } from "react";

export default function Cart() {
    const [testProducts] = useState(products);
    console.log(testProducts)
    return (
        <MaxWidthWrapper className={""}>
            <main className="bg-gray-50 min-h-[100vh] pb-20">
                <div className="flex flex-col pt-10 px-20">
                    <h3 className="text-gray-900 text-2xl font-semibold">Your Cart</h3>
                </div>
                <div className="flex flex-col lg:flex-row pt-10 px-20">
                    <div className="lg:w-[70%] w-full lg:pr-5">
                        <div className="grid grid-cols-1 sm:grid-cols-q lg:grid-cols-1 gap-4">
                            {
                                testProducts.map((product) => (
                                    <ProductHorizontalCard key={product.id} id={product.id} title={product.title} price={product.price} imageUrl={product.images[0]} />
                                ))
                            }
                        </div>
                    </div>
                    <div className="lg:w-[30%] w-full lg:pl-5 mt-10 lg:mt-0">
                       <OrderSummaryCard subtotal={10} tax={100} discount={-150} total={500} shipping={200}/>
                    </div>
                </div>
            </main>


        </MaxWidthWrapper>
    );
}
