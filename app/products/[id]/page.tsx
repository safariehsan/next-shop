import React from "react";
import { stripe } from "@/lib/stripe";
import ProductDetails from "@/components/ProductDetails";

interface PageProps {
  params: Promise<{ id: string }>;
}

const ProductPage = async (props: PageProps) => {
  const params = await props.params;
  const { id } = params;
  const currentProduct = await stripe.products.retrieve(id, {
    expand: ["default_price"],
  });
  const plainProduct = JSON.parse(JSON.stringify(currentProduct));
  return <ProductDetails product={plainProduct} />;
};

export default ProductPage;
