"use client";

import { Card } from "@/components/ui/card";
import { useCartStore } from "@/store/cart-store";
import Link from "next/link";
import React, { useEffect } from "react";

const SuccessPayment = () => {
  const { clearCart } = useCartStore();
  useEffect(() => {
    clearCart();
  }, [clearCart]);
  return (
    <div className="flex justify-center items-center mt-20 text-center flex-col gap-4">
      <Card className="p-4">
        <p>
          <b>Payment Successful</b>
        </p>
        <p>Thanks for your purchase! your order is being processed...</p>
        <Link href="/products" className="bg-green-300 py-2 rounded-3xl">
          Continue Shopping
        </Link>
      </Card>
    </div>
  );
};

export default SuccessPayment;
