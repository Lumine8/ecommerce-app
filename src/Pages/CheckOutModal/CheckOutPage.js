import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { AuthContext, DataContext } from "../../index";

export default function CheckOut() {
  const {
    wishlistItems,
    cartItems,
    RemoveFromCart,
    newAddress,
    setnewAddress,
  } = useContext(DataContext);
  const { getAddress, setGetAddress } = useContext(AuthContext);

  const totalPrice = cartItems.reduce(
    (acc, cur) => acc + parseInt(cur.price) * (cur?.qty ?? 1),
    0
  );

  const [clicked, setClicked] = useState(getAddress[0]);
  const clickItem = (item) => {
    setClicked(item);
  };
  return (
    <div className="checkout-container" style={{ paddingTop: "5rem" }}>
      <h2>Checkout</h2>
      <div className="checkoutspace">
        <div>
          <h3>Address</h3>
          <ul className="checkout-addresses">
            {getAddress.map((item) => {
              const { street, pincode, state, city } = item;
              return (
                <li
                  className="active"
                  style={{
                    boxShadow:
                      clicked === item ? "2px 5px 10px rgb(239, 238, 238)" : "",
                  }}
                  onClick={() => {
                    clickItem(item);
                  }}
                >
                  <p>Street: {street} </p>
                  <p>City: {city}</p>
                  <p>State: {state} </p>
                  <p> Pincode: {pincode}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="checkout-items">
          <h2 style={{ textAlign: "center", marginBottom: "-0.2rem" }}>
            Order Details
          </h2>
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
              }}
            >
              <div style={{ paddingRight: "0px" }}>
                <p>Name</p>
                {cartItems.map((item) => {
                  const { title, qty } = item;

                  return <p>{title}</p>;
                })}
              </div>
              <div style={{ paddingLeft: "0px" }}>
                <p>Quantity</p>

                {cartItems.map((item) => {
                  const { title, qty } = item;

                  return <p style={{ paddingLeft: "30px" }}>{qty ?? 1}</p>;
                })}
              </div>
            </div>
            <hr />
            <div>
              <h2 style={{ textAlign: "center", marginBottom: "-0.2rem" }}>
                Price Details
              </h2>
              <div
                className="order-pricing"
                style={{
                  display: "grid",
                  //   gridTemplateRows: "repeat(3,1fr)",
                  gridTemplateColumns: "repeat(2,1fr)",
                }}
              >
                <p>Price:</p>
                <p>₹{totalPrice}</p>
                <p>Discount:</p>
                <p>₹100</p>
                <p>Total Price:</p>
                <p>₹{totalPrice - 100}</p>
              </div>
            </div>
            <hr />
            <div>
              <h2 style={{ textAlign: "center", marginBottom: "-0.2rem" }}>
                Delivery Address
              </h2>
              <div
                style={{
                  display: "grid",
                  //   gridTemplateRows: "repeat(3,1fr)",
                  gridTemplateColumns: "repeat(2,1fr)",
                }}
              >
                <p>Street:</p>
                <p>{clicked?.street}</p>
                <p>City:</p>
                <p>{clicked?.city}</p>
                <p>State:</p>
                <p>{clicked?.state}</p>
                <p>Pincode:</p>
                <p>{clicked?.pincode}</p>
              </div>
              <button
                style={{
                  minHeight: "40px",
                  padding: "0 5rem",
                  marginLeft: "2.5rem",
                  marginTop: "1rem",
                  marginBottom: "1rem",
                }}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
