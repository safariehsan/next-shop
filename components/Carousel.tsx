"use client";

import React, { useEffect, useState } from "react";
import Stripe from "stripe";
import { Card, CardContent, CardTitle } from "./ui/card";
import Image from "next/image";

interface Props {
  products: Stripe.Product[];
}

const Carousel = ({ products }: Props) => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [products.length]);
  const currentProduct = products[current];
  const price = currentProduct.default_price as Stripe.Price;
  return (
    <Card>
      {currentProduct.images && currentProduct.images[0] && (
        <div className="relative h-80 w-full">
          <Image
            src={currentProduct.images[0]}
            alt={currentProduct.name}
            layout="fill"
            objectFit="cover"
            unoptimized
            className="transition-opacity duration-1000 ease-in-out"
          />
          <CardContent className="absolute">
            <CardTitle>{currentProduct.name}</CardTitle>
            {price && price.unit_amount && (
              <p>${(price.unit_amount / 100).toFixed(2)}</p>
            )}
          </CardContent>
        </div>
      )}
    </Card>
  );
};

export default Carousel;
