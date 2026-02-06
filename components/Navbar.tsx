import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between border-b border-2 border-gray-300 my-4 bg-gray-100">
      <div>
        <Link href="/">NextShop</Link>
      </div>
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/checkout">Checkout</Link>
      </div>
      <div></div>
    </nav>
  );
};

export default Navbar;
