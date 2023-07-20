import { useContext } from "react";
import { Link } from "react-router-dom";

import { DataContext } from "..";
import banner1 from "../Assets/Black Cream Food Hotdog American Food Banner Landscape.svg";
import banner2 from "../Assets/Cream Minimalist New Arrival Boater Hat Promotion Banner .svg";
import CategoryCard from "./Subpages/Category/CategoryCard";
import Loader from "./Loader/Loader";
import ErrorPage from "./Error/ErrorPage";

export default function Home() {
  const { CategoriesData, filterCategory, state, getProductById } =
    useContext(DataContext);
  const randombanner = [banner1, banner2];
  const banner = randombanner[Math.trunc(Math.random() * randombanner.length)];
  const featuredProd3 = [
    ...state.productData
      .filter((item) => parseFloat(item.rating) > 4.4)
      .slice(12, 15),
  ];
  const featuredProd2 = state.productData
    .filter((item) => parseFloat(item.rating) > 4.7)
    .slice(1, 3);
  console.log();

  return state.Loader === true ? (
    <Loader />
  ) : state.error === true ? (
    <ErrorPage />
  ) : (
    <div id="container" className="HomePage">
      <section
        className="img-slider HomePage"
        style={{ paddingBottom: "1rem" }}
      >
        <div className="slide">
          <Link to="/products">
            <img src={banner} alt="banner 2" />
          </Link>
        </div>
      </section>
      <hr />
      <div id="categories" style={{ padding: "5rem 0 5rem 0" }}>
        <section className="categories">
          <h1 style={{ padding: "1rem 0", textAlign:"center", margin:"0 0 0 -1rem" }}>FEATURED CATEGORIES</h1>
          <ul>
            {CategoriesData.map((item) => {
              const { _id, categoryName, description, img } = item;
              return (
                <li key={_id}>
                  <Link
                    to="/products"
                    onClick={() => filterCategory(categoryName)}
                    style={{ textDecoration: "none" }}
                  >
                    <CategoryCard props={{ categoryName, description, img }} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
      <hr />
      <div className="featuredProds"  style={{ padding: "3rem 0 3rem 0" }}>
        <section>
          <h2 style={{ padding: "1rem 0" }}>FEATURED PRODUCTS</h2>
          <div className="featuredProd3">
            <ul>
              {featuredProd3.map((item) => {
                const { _id, image, rating, title, price } = item;
                return (
                  <li key={_id}>
                    <Link
                      to={`/products/${_id}`}
                      style={{ textDecoration: "none", color: "whitesmoke" }}
                      onClick={() => {
                        getProductById(_id);
                      }}
                    >
                      <img src={image} alt={title} />
                      <h3>{title}</h3>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="featuredProd2">
            <ul>
              {featuredProd2.map((item) => {
                const { _id, image, rating, title, price } = item;
                return (
                  <li key={_id}>
                    <Link
                      to={`/products/${_id}`}
                      style={{ textDecoration: "none", color: "whitesmoke" }}
                      onClick={() => {
                        getProductById(_id);
                      }}
                    >
                      <img src={image} alt={title} />
                      <h3>{title}</h3>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
