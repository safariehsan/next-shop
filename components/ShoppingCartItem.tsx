import React from "react";
import { CartItem, useCartStore } from "@/store/cart-store";
import Image from "next/image";
import { TableCell, TableRow } from "./ui/table";
import { Button } from "./ui/button";

const ShoppingCartItem = ({
  item,
  index,
}: {
  item: CartItem;
  index: number;
}) => {
  const { removeItem, addItem } = useCartStore();
  const onAddClick = () => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price as number,
      imgUrl: item.imgUrl,
      quantity: 1,
    });
  };
  const onRemoveClick = () => {
    removeItem(item.id);
  };
  return (
    <TableRow>
      <TableCell>{index + 1}</TableCell>
      <TableCell>
        {item.imgUrl && (
          <Image
            src={item.imgUrl}
            alt={item.name}
            width={100}
            height={100}
            unoptimized
          />
        )}
      </TableCell>
      <TableCell>{item.name}</TableCell>
      <TableCell>{item.quantity}</TableCell>
      <TableCell>${(item.price / 100).toFixed(2)}</TableCell>
      <TableCell>
        <Button variant="outline" onClick={onRemoveClick}>
          -
        </Button>
        <span>{item.quantity}</span>
        <Button variant="outline" onClick={onAddClick}>
          +
        </Button>
      </TableCell>
      <TableCell>${((item.price * item.quantity)/100).toFixed(2)}</TableCell>
    </TableRow>
  );
};

export default ShoppingCartItem;
