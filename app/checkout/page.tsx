"use client";

import React from "react";
import ShoppingCartItem from "@/components/ShoppingCartItem";
import { useCartStore } from "@/store/cart-store";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const CheckoutPage = () => {
  const { items, clearCart } = useCartStore();
  const totalAamount = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  if (items.length === 0 || totalAamount === 0) {
    return <p>Your cart is empty!</p>;
  }
  return (
    <div>
      <h1 className="font-bold text-5x my-4 text-center">Order summary</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Action</TableHead>
            <TableHead>Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item, index) => {
            return <ShoppingCartItem item={item} index={index} key={item.id} />;
          })}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={6}>Total</TableCell>
            <TableCell className="text-lg">
              ${(totalAamount / 100).toFixed(2)}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <form>
        <Button variant="secondary" onClick={clearCart}>
          Clear Cart
        </Button>
        <Button>Proceed to payment</Button>
      </form>
    </div>
  );
};

export default CheckoutPage;
