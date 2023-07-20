import { useContext, useState } from "react";

import { DataContext } from "..";

import ProductCard from "./Subpages/Product/ProductCard";
import Pagination from "./PagesAndFilters/Pagination";
import Sidebar from "./PagesAndFilters/Sidebar";
import Loader from "./Loader/Loader";
import ErrorPage from "./Error/ErrorPage";

export default function Products() {
  const {
    state,
    ProductData,
    sorter,
    filterCategory,
    categoryFiltered,
    searchWith,
    searchFiltered,
    resetCategory,
    filters,
    ratingFilter,
    filteredRating,
  } = useContext(DataContext);

  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 10;

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  // const filteredProducts =
  //   filters.sortBy === "min"
  //     ? ProductData.sort((a, b) => a.price - b.price)
  //     : filters.sortBy === "max"
  //     ? ProductData.sort((a, b) => b.price - a.price)
  //     : ProductData;

  const filteredProducts = (
    Object.keys(categoryFiltered).every((k) => categoryFiltered[k] === false)
      ? ProductData
      : ProductData.filter((item) => {
          if (categoryFiltered[item.category]) return item;
        })
  ).filter((item) => item.rating >= filteredRating);

  const anotherFilteredProducts = filteredProducts.filter((item) =>
    item.title
      .toLowerCase()
      .includes(
        searchFiltered === ""
          ? item.title.toLowerCase()
          : searchFiltered.toLowerCase()
      )
  );
  const currentPost = anotherFilteredProducts.slice(
    firstPostIndex,
    lastPostIndex
  );

  return state.Loader === true ? (
    <Loader />
  ) : state.error === true ? (
    <ErrorPage/>
  ) : (
    <div id="container" className="productspage">
      <h1>ALL PRODUCTS</h1>

      <Pagination
        totalPost={ProductData.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
      />
      <div className="productsPage">
        <div>
          <Sidebar
            props={{
              sorter,
              filterCategory,
              searchWith,
              resetCategory,
              categoryFiltered,
              filters,
              ratingFilter,
            }}
          />
        </div>
        <div>
          <ul id="products">
            {currentPost?.map((item) => {
              const { _id, title, image, price, rating } = item;
              return (
                <li key={_id}>
                  <ProductCard
                    props={{ id: _id, title, image, price, rating }}
                  />{" "}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
