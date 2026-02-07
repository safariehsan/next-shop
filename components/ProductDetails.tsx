"use client";

import Image from "next/image";
import React from "react";
import Stripe from "stripe";
import { Button } from "./ui/button";
import { useCartStore } from "@/store/cart-store";

interface Props {
  product: Stripe.Product;
}

const ProductDetails = ({ product }: Props) => {
  const price = product.default_price as Stripe.Price;
  const { items, addItem } = useCartStore();
  const cartItem = items.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;
  const onAddClick = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: price.unit_amount as number,
      imgUrl: product.images ? product.images[0] : null,
      quantity: 1,
    });
  };
  return (
    <div>
      ProductDetails ({product.id})
      <br />
      <Image
        src={product.images[0]}
        alt={product.name}
        unoptimized
        width={300}
        height={300}
        className=""
      />
      {price && price.unit_amount && (
        <p className="font-bold text-md">
          ${(price.unit_amount / 100).toFixed(2)}
        </p>
      )}
      <Button variant="outline">-</Button>
      <span>{quantity}</span>
      <Button variant="outline" onClick={onAddClick}>
        +
      </Button>
    </div>
  );
};

export default ProductDetails;
