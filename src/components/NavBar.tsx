'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import MaxWidthWrapper from './wrappers/MaxWidthWrapper';
import { useCart } from '@/context/CartContext';

// Website top navigation
const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [cartBounce, setCartBounce] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const { cart } = useCart();

    // Calculate total items in cart, considering quantities
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    // Trigger bounce animation on cart item count change
    useEffect(() => {
        if (totalItems > 0) {
            setCartBounce(true);
            const timer = setTimeout(() => {
                setCartBounce(false);
            }, 300); // Duration of the animation
            return () => clearTimeout(timer);
        }
    }, [totalItems]);

    return (
        <nav className="sticky top-0 z-50">
            <MaxWidthWrapper className={""}>
                <div className="bg-white shadow-md max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Left section: Logo */}
                        <div className="flex-shrink-0">
                            <Link href="/" className="text-2xl font-bold text-gray-800">
                                E-COM by <span className="text-red-400">MJ</span>
                            </Link>
                        </div>

                        {/* Right section: Dropdown Menu & cart */}
                        <div className="flex items-center">
                            <div className="relative">
                                <button
                                    onClick={toggleDropdown}
                                    className="block md:hidden text-gray-800 hover:text-gray-600 focus:outline-none"
                                >
                                    <FaBars className="h-6 w-6" />
                                </button>
                                <button
                                    onClick={toggleDropdown}
                                    className="hidden md:block text-gray-800 hover:text-gray-600 font-semibold focus:outline-none hover:bg-slate-200 px-5 py-1"
                                >
                                    CATALOG
                                </button>
                                {isDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                                        <Link
                                            href="/category1"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Electronics
                                        </Link>
                                        <Link
                                            href="/category2"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Ladies Fashion
                                        </Link>
                                        <Link
                                            href="/category3"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Mens Fashion
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* Cart */}
                            <div className="ml-4">
                                <Link href="/cart" className="relative text-gray-800 hover:text-gray-600">
                                    <FaShoppingCart
                                        className={`h-6 w-6 transition-transform ${cartBounce ? 'transform scale-110' : ''}`}
                                        style={{
                                            transition: 'transform 0.3s ease-in-out',
                                        }}
                                    />
                                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-400 rounded-full">
                                        {totalItems}
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    );
};

export default NavBar;
