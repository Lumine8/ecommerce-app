import { useContext } from "react";
import { BsFillHeartbreakFill } from "react-icons/bs";

import ProductCard from "./Subpages/Product/ProductCard";
import { DataContext } from "../../src/index";

export default function Wishlist() {
  const { wishlistItems, cartItems,RemoveFromWishlist } = useContext(DataContext);
  return (
    <div id="container">
      <h1>Your Wishlist</h1>
      {wishlistItems.length ? (
        <ul>
          {wishlistItems.map((item) => {
            const { id, title, image, price, rating } = item;
            return (
              <li key={id}>
                <ProductCard props={{ id, title, image, price, rating }} />{" "}
                <button onClick={()=>RemoveFromWishlist(item)}><BsFillHeartbreakFill/></button>
              </li>
            );
          })}
        </ul>
      ) : (
        <h3>Your Wishlist is Empty {":("}</h3>
      )}
    </div>
  );
}
