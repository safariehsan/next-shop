"use client";

import React, { useState } from "react";
import Stripe from "stripe";
import ProductItem from "./ProductItem";

interface Props {
  products: Stripe.Product[];
}

const ProductsList = ({ products }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts = products.filter((product) => {
    const term = searchTerm.trim().toLowerCase();
    const nameMatch = product.name.toLowerCase().includes(term);
    const descMatch = product.description?.toLowerCase().includes(term);
    return nameMatch || descMatch;
  });
  return (
    <div>
      <div className="text-center block mb-10">
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          type="text"
          placeholder="search for product..."
          className="border border-gray-300 bg-gray-100 p-2 w-1/3"
        />
      </div>
      <ul className="flex gap-2 justify-around">
        {filteredProducts &&
          filteredProducts.map((product: Stripe.Product) => {
            return (
              <li key={product.id}>
                <ProductItem product={product} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ProductsList;
