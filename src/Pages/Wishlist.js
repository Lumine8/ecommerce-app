import { useContext } from "react";
import {PiHandHeartThin} from "react-icons/pi"
import {PiSmileySadLight} from "react-icons/pi"
import { BsFillHeartbreakFill } from "react-icons/bs";

import ProductCard from "./Subpages/Product/ProductCard";
import { DataContext } from "../../src/index";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Wishlist() {
  const {
    wishlistItems,
    addCartItem,
    deleteFromWishlist,
    IncrementCartData,
    cartItems,
  } = useContext(DataContext);

  const moveToCartHandler = (item) => {
    if (cartItems.filter((items) => items._id === item._id).length === 0) {
      addCartItem(item);
      deleteFromWishlist(item);
      toast.success("Added To Cart !", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 2000,
      });
    } else {
      IncrementCartData(item);
      deleteFromWishlist(item);
    }
  };

  const deleteWishlistItem = (item) =>{
    toast.success("Removed From Wishlist !", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 2000,
    });
    deleteFromWishlist(item)
  }
  return (
    <div id="wishList">
    <div className="wishlist-container">
      <h1> <PiHandHeartThin size={50} style={{marginBottom:"-0.9rem"}}/> WISHLIST</h1>
      {wishlistItems.length ? (
        <ul>
          {wishlistItems.map((item) => {
            const { _id : id, title, image, price, rating } = item;
            return (
              <li key={id}>
                <ProductCard props={{ id, title, image, price, rating }} />{" "}
                <div className="buttons ">
                  <button onClick={() => deleteWishlistItem(item)}>
                    <BsFillHeartbreakFill style={{ marginBottom: "-3px" }} />
                  </button>
                  <button onClick={() => moveToCartHandler(item)}>
                    Move To Cart
                  </button>
                </div>
              </li>
            );
          })}<ToastContainer/>
        </ul>
      ) : (
        <div>
        <h2>Your Wishlist is Empty <PiSmileySadLight size={40} style={{marginBottom:"-0.7rem"}}/></h2>
        <ToastContainer/>
        </div>
      )}
      </div>
    </div>
  );
}
