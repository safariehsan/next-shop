import Link from "next/link";
import React from "react";
import Stripe from "stripe";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

interface Props {
  product: Stripe.Product;
}

const ProductItem = ({ product }: Props) => {
  const price = product.default_price as Stripe.Price;
  return (
    <Link href={`/products/${product.id}`}>
      <Card className="bg-gray-100">
        <div className="h-auto w-60">
          <Image
            src={product.images[0]}
            alt={product.name}
            unoptimized
            width={300}
            height={300}
            className=""
          />
          <CardContent className="">
            <CardTitle>{product.name}</CardTitle>
            <p className="description">{product.description}</p>
            {price && price.unit_amount && (
              <p className="font-bold text-md">
                ${(price.unit_amount / 100).toFixed(2)}
              </p>
            )}
          </CardContent>
          <CardFooter className="">
            <Button className="bg-indigo-400 px-4 py-1 w-full block">
              <Link href={`/products/${1}`}>View Details</Link>
            </Button>
          </CardFooter>
        </div>
      </Card>
    </Link>
  );
};

export default ProductItem;
