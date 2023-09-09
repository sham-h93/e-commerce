"use client";
import CartItem from "./cartItem";
import { ProductItem } from "./types/productItemType";

const CartItems = ({ products }: { products: ProductItem[] }) => {
  function handleCartItems() {
    return products.map((product) => {
      return (
        <li key={product.id}>
          <CartItem product={product} />
        </li>
      );
    });
  }

  return <ul className="flex flex-col w-full gap-4">{handleCartItems()}</ul>;
};

export default CartItems;
