"use client";
import { Product } from '@/common/interfaces/product.interface';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CartItem extends Product {
  id: Key | null | undefined;
  quantity: number;
}

interface CartContextProps {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  reduceFromCart: (id: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        // Increment the quantity if the product already exists in the cart
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Add the product to the cart with quantity 1 if it's not in the cart
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };


  const reduceFromCart = (id: number) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === id);
      if (existingProduct) {
        if (existingProduct.quantity === 1) {
          // Remove the item from the cart if the quantity is 1
          return prevCart.filter((item) => item.id !== id);
        } else {
          // Decrement the quantity by 1 if it's greater than 1
          return prevCart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          );
        }
      }
      return prevCart;
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, reduceFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
