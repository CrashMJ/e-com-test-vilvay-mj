'use client';

import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ProductCard from "@/components/Product/ProductCard";
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import { useCart } from "@/context/CartContext";
import { CartAction } from '@/common/interfaces/cart-action.interface';
import { Product } from '@/common/interfaces/product.interface';
import axios from 'axios';
import ProductSkeleton from "@/components/Product/ProductSkeleton";

// Implement the fetchProducts function
async function fetchProducts({ offset, limit }: any) {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/?offset=${offset}&limit=${limit}`);
  return response.data;
}

// Sub-component to fetch and render products
function ProductList() {
  const { addToCart } = useCart();

  const { data: products, error, isLoading, refetch } = useQuery({
    queryKey: ['products', { offset: 10, limit: 10 }],
    queryFn: () => fetchProducts({ offset: 10, limit: 10 }),
    retry: false, // Disable automatic retries
  });

  const cartActionHandler = (cartAction: CartAction, product: Product) => {
    switch (cartAction.action) {
      case "add":
        addToCart(product);
        break;
      default:
        throw new Error(`Unknown action: ${cartAction.action}`);
    }
  };

  if (isLoading) return <ProductSkeleton />;

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center mt-20">
        <h2 className="text-xl font-semibold text-red-500">Failed to load products</h2>
        <p className="mt-2 text-gray-600">An error occurred while fetching products. Please try again.</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => refetch()}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="px-4 lg:px-20 pt-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {products && products.map((product: Product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          imageUrl={product.images[0]}
          layout={"vertical"}
          quantity={0}
          cartAction={(action) => cartActionHandler(action, product)}
        />
      ))}
    </div>
  );
}

// Home page
export default function Home() {
  return (
    <MaxWidthWrapper className={""}>
      <main className="bg-gray-50 min-h-[calc(100vh)] pb-20">
        <div className="flex flex-col pt-10 px-4 lg:px-20 ">
          <h3 className="flex flex-col text-gray-900 text-2xl font-semibold">Featured Products</h3>
        </div>
        <ProductList />
      </main>
    </MaxWidthWrapper>
  );
}
