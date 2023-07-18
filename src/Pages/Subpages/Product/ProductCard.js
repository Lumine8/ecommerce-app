import { useContext } from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { DataContext } from "../../../";

export default function ProductCard({ props }) {
  const { getProductById, getProduct } = useContext(DataContext);

  const { id, title, image, price, rating } = props;
  return (
    <div className="productCard">
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={`/products/${id}`}
        onClick={() => {
          getProductById(id);
        }}
      >
        <img src={image} alt={title} />
      </Link>
      <div>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={`/products/${id}`}
          onClick={() => {
            getProductById(id);
          }}
        >
          <h3>{title}</h3>
          <div>
            {rating <= 0 ? (
              "N/A"
            ) : (
              <div>
                <StarRatings
                  starRatedColor="orange"
                  rating={Number(rating)}
                  starDimension="15px"
                  starSpacing="1px"
                />
                <span style={{ fontSize: "13px", paddingLeft: "10px" }}>
                  {rating}
                </span>
              </div>
            )}
          </div>
          <p>
            <sup>₹ </sup>
            {price}
          </p>
          <p></p>
        </Link>
      </div>
    </div>
  );
}
