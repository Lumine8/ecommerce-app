import { useContext } from "react";
import { useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { DataContext } from "../../..";

export default function ProductDetails() {
  const { productId } = useParams();

  const { ProductData, addWishListItem, addCartItem,wishlistItems, cartItems } = useContext(DataContext);
  console.log(wishlistItems)

  const filteredData = ProductData?.filter((item) => item.id == productId)[0];
  const { title, image, price, rating, desc, category } = filteredData;

  const addToCartHandler = (item) => {
    addCartItem(item);
  };
  const addToWishHandler = (item) => {
    addWishListItem(item);
  };

  return (
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
            disabled={wishlistItems.includes(filteredData)}
          >
            <MdOutlineFavoriteBorder style={{ fontSize: "small" }} />
            {wishlistItems.includes(filteredData)?"Added to Favorite" :"Add to Favorite"}
          </button>{" "}
          &nbsp;&nbsp;&nbsp;{" "}
          <button
            className="button"
            onClick={() => addToCartHandler(filteredData)}
            disabled={cartItems.includes(filteredData)}
          >
            <AiOutlineShoppingCart /> {cartItems.includes(filteredData)?"Added to Cart" :"Add to Cart"}
          </button>
        </p>
      </div>
    </div>
  );
}
