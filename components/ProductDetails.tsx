import Image from "next/image";
import React from "react";
import Stripe from "stripe";
import { Button } from "./ui/button";

interface Props {
  product: Stripe.Product;
}

const ProductDetails = ({ product }: Props) => {
  const price = product.default_price as Stripe.Price;
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
      <span>0</span>
      <Button variant="outline">+</Button>
    </div>
  );
};

export default ProductDetails;
