import React from "react";
import ProductsList from "@/components/ProductsList";
import { stripe } from "@/lib/stripe";

const ProductsPage = async () => {
  try {
    const products = await stripe.products.list({
      expand: ["data.default_price"],
    });
    return (
      <div>
        <h1>All Products Of NextShop</h1>
        <ProductsList products={products.data} />
      </div>
    );
  } catch (err) {
    console.log(err);
    return (
      <div>
        <p> Unable to load products at the moment. Please try again later.</p>
      </div>
    );
  }
};

export default ProductsPage;
