import { useContext } from "react";

import ProductCard from "./Subpages/Product/ProductCard";
import { DataContext } from "../../src/index";

export default function Cart() {
  const { wishlistItems, cartItems,RemoveFromCart } = useContext(DataContext);
  const totalPrice = cartItems.reduce((acc,cur)=>acc+parseInt(cur.price),0)
  return (
    <div id="container">
    <div>Total Cost: {totalPrice}<sup>00</sup></div>
      <h1>This is the Cart Page</h1>
      {cartItems.length ? (
        <ul>
          {cartItems.map((item) => {
            const { id, title, image, price, rating } = item;
            return (
              <li key={id}>
                <h3>{title}</h3>
                <p>{price}</p>
                <button onClick={()=>RemoveFromCart(item)}>Remove from Cart</button>
              </li>
            );
          })}
        </ul>
      ) : (
        <h3>Your Cart is Empty {":("}</h3>
      )}
    </div>
  );
}
