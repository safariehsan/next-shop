import Link from "next/link";
import React from "react";
import Stripe from "stripe";
import { Card, CardContent, CardTitle } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { useCartStore } from "@/store/cart-store";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { EyeIcon } from "@heroicons/react/24/outline";

interface Props {
  product: Stripe.Product;
}

const ProductItem = ({ product }: Props) => {
  const price = product.default_price as Stripe.Price;
  const { addItem } = useCartStore();
  const onAddItemClick = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: price.unit_amount as number,
      imgUrl: product.images ? product.images[0] : null,
      quantity: 1,
    });
  };
  return (
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
        <div className="flex justify-around mt-4">
          <Button className="bg-gray-200 px-4 py-1 text-center">
            <Link
              href={`/products/${product.id}`}
              className="flex items-center justify-center gap-2"
            >
              <EyeIcon /> View
            </Link>
          </Button>
          <Button
            className="bg-gray-200 px-4 py-1 text-center"
            onClick={onAddItemClick}
          >
            <PlusCircleIcon /> Add
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductItem;
