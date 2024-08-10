
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Best E-Commerce Platform in Sri Lanka | Fashion, Electronics, Household Items & More",
  description: "Shop the best Fashion, Electronics, Household Items, Groceries, and manage Utility Payments online with Sri Lanka's top e-commerce platform. Enjoy fast delivery, great prices, and exceptional service.",
  keywords: "e-commerce, fashion, electronics, household items, groceries, Sri Lanka, online shopping",
  openGraph: {
    title: "Best E-Commerce Platform in Sri Lanka | Fashion, Electronics, Household Items & More",
    description: "Shop the best Fashion, Electronics, Household Items, Groceries, and manage Utility Payments online with Sri Lanka's top e-commerce platform. Enjoy fast delivery, great prices, and exceptional service.",
    url: "https://www.ecombymj.com/",
    type: "website",
    images: [
      {
        url: "https://www.ecombymj.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "E-Commerce Platform Banner Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best E-Commerce Platform in Sri Lanka | Fashion, Electronics, Household Items & More",
    description: "Shop the best Fashion, Electronics, Household Items, Groceries, and manage Utility Payments online with Sri Lanka's top e-commerce platform. Enjoy fast delivery, great prices, and exceptional service.",
    image: "https://www.ecombymj.com/og-image.jpg",
    site: "@ecombymj",
  },
  canonical: "https://www.ecombymj.com/",
  robots: "index, follow",
  author: "Your Company Name",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <NavBar />
          <MaxWidthWrapper className="">
            {children}
            <Footer />
          </MaxWidthWrapper>
        </CartProvider>
      </body>
    </html>
  );
}
