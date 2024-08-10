// RootLayoutClient.tsx
'use client';

import { Inter } from "next/font/google";
import './globals.css'; // Ensure this path is correct and it imports the CSS file
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartProvider } from "@/context/CartContext";
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();

// Root client layout
export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <div className={inter.className}>
          <NavBar />
          <MaxWidthWrapper className="">
            {children}
            <Footer />
          </MaxWidthWrapper>
        </div>
      </CartProvider>
    </QueryClientProvider>
  );
}
