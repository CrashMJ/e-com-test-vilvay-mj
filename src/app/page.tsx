'use client'
import { products } from "@/common/data/products.data";
import ProductVerticalCard from "@/components/Product/ProductVerticalCard";
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import Image from "next/image";
import { useState } from "react";


export default function Home() {
  const [testProducts] = useState(products);
  console.log(testProducts)
  return (
    <MaxWidthWrapper className={""}>
      <main className="bg-gray-50 min-h-[calc(100vh)] pb-20">
        <div className="flex flex-col pt-10 px-20">
          <h3 className="flex flex-col text-gray-900 text-2xl font-semibold">Featured Products</h3>
        </div>
        <div className="px-20 pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {
            testProducts.map((product) => (
              <ProductVerticalCard key={product.id} id={product.id} title={product.title} price={product.price} imageUrl={product.images[0]} />
            ))
          }
        </div>

      </main>

    </MaxWidthWrapper>
  );
}
