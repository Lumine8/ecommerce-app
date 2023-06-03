import { useContext, useState } from "react";

import { DataContext } from "..";
import ProductCard from "./Subpages/Product/ProductCard";
import Pagination from "./PagesAndFilters/Pagination";
import Sidebar from "./PagesAndFilters/Sidebar";

export default function Products() {
  const {
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

  const filteredProducts = (Object.keys(categoryFiltered).every(
    (k) => categoryFiltered[k] === false
  )
    ? ProductData
    : ProductData.filter((item) => {
        if (categoryFiltered[item.category]) return item;
      })).filter((item)=>item.rating >= filteredRating);

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

  return (
    <div id="container">
      <h1>ALL PRODUCTS</h1>
      <Pagination
        totalPost={ProductData.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
      />
      <Sidebar
        props={{
          sorter,
          filterCategory,
          searchWith,
          resetCategory,
          categoryFiltered,
          filters,
          ratingFilter
        }}
      />

      <ul id="products">
        {currentPost?.map((item) => {
          const { id, title, image, price, rating } = item;

          return (
            <li key={id}>
              <ProductCard props={{ id, title, image, price, rating }} />{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
