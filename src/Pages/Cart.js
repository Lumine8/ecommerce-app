import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ProductCard from "./Subpages/Product/ProductCard";
import { DataContext } from "../../src/index";

export default function Cart() {
  const {
    wishlistItems,
    cartItems,
    RemoveFromCart,
    DecrementCartData,
    IncrementCartData,
  } = useContext(DataContext);

  const totalPrice = cartItems.reduce(
    (acc, cur) => acc + parseInt(cur.price) * (cur?.qty ?? 1),
    0
  );

  const removeFromCart = (item) => {
    toast.success("Removed From Cart !", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 2000,
    });
    RemoveFromCart(item);
  };

  return (
    <div id="container">
      <h1>This is the Cart Page</h1>

      {cartItems.length ? (
        <div className="Cart-container">
          <ul className="cart-items">
            {cartItems.map((item) => {
              const { id, title, image, price, rating, qty } = item;
              return (
                <li key={id}>
                  <h3>{title}</h3>
                  <p>{price * qty}</p>
                  <div>
                    <button onClick={() => removeFromCart(item)}>
                      <BsTrash style={{ marginBottom: "-2px" }} /> Remove from
                      Cart
                    </button>
                    &nbsp;
                    <button onClick={() => IncrementCartData(item)}>+1</button>
                    <button style={{ border: "none", padding: "0 10px" }}>
                      {qty ?? 1}
                    </button>
                    <button onClick={() => DecrementCartData(item)}>-1</button>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="cart-details">
            <h4>Cart Details</h4>
            <p>
              Price : ₹{totalPrice}
              <sup>00</sup>
            </p>
            <p>Item : {cartItems.length}</p>
            <p>Discount : ₹100</p>
            <p>
              Final Price : ₹{totalPrice - 100}
              <sup>00</sup>
            </p>
            <ToastContainer/>
            <button>
              <Link
                to="/checkout"
                style={{ textDecoration: "none", color: "black" }}
              >
                CHECKOUT
              </Link>
            </button>
          </div>
        </div>
      ) : (
        <h3>Your Cart is Empty {":("}</h3>
      )}
    </div>
  );
}
