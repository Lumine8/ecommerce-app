import { useContext } from "react";
import { Link } from "react-router-dom";

import { DataContext } from "..";
import banner1 from "../Assets/Black Cream Food Hotdog American Food Banner Landscape.svg";
import banner2 from "../Assets/Cream Minimalist New Arrival Boater Hat Promotion Banner .svg";
import CategoryCard from "./Subpages/Category/CategoryCard";
import Loader from "./Loader/Loader";
import ErrorPage from "./Error/ErrorPage";

export default function Home() {
  const { CategoriesData, filterCategory, state } = useContext(DataContext);
  const randombanner = [banner1, banner2];
  const banner = randombanner[Math.trunc(Math.random() * randombanner.length)];

  return state.Loader === true ? (
    <Loader />
  ) : state.error === true ? (
    <ErrorPage />
  ) : (
    <div id="container">
      <section className="img-slider">
        <div className="slide">
          <Link to="/products">
            <img src={banner} alt="banner 2" />
          </Link>
        </div>
      </section>
      <section className="categories">
        <h1>SHOP BY CATEGORIES</h1>
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
      <div style={{ marginBottom: "23rem" }}></div>
    </div>
  );
}
