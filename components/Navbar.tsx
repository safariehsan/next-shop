import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link href="/">NextShop</Link>
      </div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/checkout">Checkout</Link>
      </div>
    </nav>
  );
};

export default Navbar;
