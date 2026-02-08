"use client";

import React, { useEffect, useState } from "react";
import {
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useCartStore } from "@/store/cart-store";
import { Button } from "./ui/button";

const Navbar = () => {
  const { items } = useCartStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <nav className="flex justify-between border-b border-2 border-gray-300 my-4 bg-gray-100">
        <div>
          <Link href="/">NextShop</Link>
        </div>
        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/checkout">Checkout</Link>
        </div>
        <div className="relative">
          <Link href="/checkout">
            <ShoppingCartIcon className="w-6" />
            {cartCount && (
              <span className="bg-red-500 text-white absolute bottom-4 right-2 rounded-full h-5 w-5 text-sm font-semibold p-0 text-center block">
                {cartCount}
              </span>
            )}
          </Link>
          <Button
            variant="ghost"
            className="cursor-pointer md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <XMarkIcon /> : <Bars3Icon />}
          </Button>
        </div>
      </nav>
      {mobileOpen && (
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/checkout">Checkout</Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;
