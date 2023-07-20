import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { DataContext } from "../../..";
import axios from "axios";
import Loader from "../../Loader/Loader";
import ErrorPage from "../../Error/ErrorPage";

export default function ProductDetails() {
  const { productId } = useParams();

  const {
    state,
    getProduct,
    addToWishlist,
    ProductData,
    addWishListItem,
    addCartItem,
    wishlistItems,
    DecrementCartData,
    IncrementCartData,
    cartItems,
  } = useContext(DataContext);

  const filteredData = getProduct;

  const { title, image, price, rating, desc, category } = filteredData;

  const addToCartHandler = (item) => {
    addCartItem(item);
    toast.success("Added To Cart !", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 2000,
    });
  };

  const incrementProductQty = (product) => {
    IncrementCartData(product);
  };

  const decrementProductQty = (product) => {
    // console.log(
    //   state?.cartData?.filter((item) => item._id === filteredData._id)[0]
    // );
    DecrementCartData(product);
  };

  const addToWishHandler = (item) => {
    addToWishlist(item);
    toast.success("Added To WishList !", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 2000,
    });
  };

  return state.Loader === true ? (
    <Loader />
  ) : state.error === true ? (
    <ErrorPage />
  ) : (
    <div className="SingleProductPage">
      <div id="productPage">
        <div className="imgDiv">
          <img src={image} alt={title} />
        </div>
        <div className="rating">
          <div className="prodText">
            <StarRatings
              starRatedColor="orange"
              rating={Number(rating)}
              starDimension="18px"
              starSpacing="1px"
              starEmptyColor="grey"
            />
          </div>
        </div>
        <div className="container">
          <h1 className="prodText">{title}</h1>
          <p className="prodText">
            <sup>₹ </sup>
            {price}
          </p>
          <p style={{ paddingLeft: "9px" }}>Categories: {category}</p>
          <hr />
          <h4>{desc}</h4>
          <p className="buttonClass">
            {" "}
            <button
              className="button"
              onClick={() => addToWishHandler(filteredData)}
              disabled={wishlistItems.some(
                (item) => item._id === filteredData._id
              )}
            >
              <MdOutlineFavoriteBorder style={{ fontSize: "small" }} />
              {wishlistItems.some((item) => item._id === filteredData._id)
                ? "Added to Favorite"
                : "Add to Favorite"}
              <ToastContainer />
            </button>{" "}
            &nbsp;&nbsp;&nbsp;{" "}
            {cartItems.filter((item) => item._id === filteredData._id)
              .length === 0 ? (
              <button
                className="button"
                onClick={() => addToCartHandler(filteredData)}
              >
                <AiOutlineShoppingCart />{" "}
                {cartItems.filter((item) => item._id === filteredData._id)
                  .length === 0
                  ? "Add to Cart"
                  : "Added to Cart"}
              </button>
            ) : (
              <div>
                <ToastContainer />
                <button onClick={() => incrementProductQty(filteredData)}>
                  +1
                </button>
                <button style={{ border: "none", padding: "0 10px" }}>
                  {
                    cartItems?.filter(
                      (item) => item._id === filteredData._id
                    )[0]?.qty
                  }
                </button>
                <button onClick={() => decrementProductQty(filteredData)}>
                  -1
                </button>
              </div>
            )}
          </p>{" "}
        </div>
      </div>
    </div>
  );
}
