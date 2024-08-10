'use client'

import { products } from "@/common/data/products.data";
import { CartAction } from "@/common/interfaces/cart-action.interface";
import { Product } from "@/common/interfaces/procut.interface";
import ProductCard from "@/components/Product/ProductCard";
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function Home() {
  const [testProducts] = useState(products);
  const { addToCart } = useCart();

  const cartActionHandler = (cartAction: CartAction, product: Product) => {
    switch (cartAction.action) {
      case "add":
        addToCart(product);
        break;
      default:
        throw new Error(`Unknown action: ${cartAction.action}`);
    }
  };


  console.log(testProducts)
  return (
    <MaxWidthWrapper className={""}>
      <main className="bg-gray-50 min-h-[calc(100vh)] pb-20">
        <div className="flex flex-col pt-10 px-4 lg:px-20 ">
          <h3 className="flex flex-col text-gray-900 text-2xl font-semibold">Featured Products</h3>
        </div>
        <div className="px-4 lg:px-20 pt-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {
            testProducts.map((product) => (
              <ProductCard key={product.id} id={product.id} title={product.title} price={product.price} imageUrl={product.images[0]} layout={"vertical"} cartAction={(action) => cartActionHandler(action, product)} />
            ))
          }
        </div>

      </main>

    </MaxWidthWrapper>
  );
}
