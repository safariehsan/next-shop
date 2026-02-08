import React from "react";
import { stripe } from "@/lib/stripe";
import ProductDetails from "@/components/ProductDetails";

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const currentProduct = await stripe.products.retrieve(params.id, {
    expand: ["default_price"],
  });
  const plainProduct = JSON.parse(JSON.stringify(currentProduct));
  return <ProductDetails product={plainProduct} />;
};

export default ProductPage;
