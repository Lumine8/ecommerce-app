import { createContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import { INITTAL_STATE, productReducer } from "../Reducer/reducer";

export const DataContext = createContext();
export function DataProvider({ children }) {
  const [state, dispatch] = useReducer(productReducer, INITTAL_STATE);

  // {headers: autherization:"encodedTokens"}

  const getData = async () => {
    try {
      const prodData = await fetch("/api/products");
      const categories = await fetch("/api/categories");

      if (prodData.status === 200 || prodData.status === 201) {
        const prodDataJSON = await prodData.json();
        dispatch({ type: "GET_PRODUCT_DATA", payload: prodDataJSON?.products });
      }

      if (categories.status === 200 || categories.status === 201) {
        const categoriesJSON = await categories.json();
        dispatch({
          type: "GET_CATEGORIES",
          payload: categoriesJSON?.categories,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getWishlist = async () => {
    try {
      const wishlistReponse = await axios.get("/api/user/wishlist", {
        header: { authorization: localStorage.getItem("token") },
      });
      if (wishlistReponse.status === 200) {
        console.log(wishlistReponse);
        // dispatch({
        //   type:"GET_WISHLIST_DATA",
        //   payload: wishlistReponse?.data?.wishlist
        // })
      }
    } catch (e) {
      console.log(e);
    }
  };

  const sorter = (value) => {
    dispatch({ type: "SORT", payload: value });
  };

  const filterCategory = (value) => {
    dispatch({ type: "CATEGORY_FILTER", payload: value });
  };

  const searchWith = (value) => {
    dispatch({ type: "SEARCH_FILTER", payload: value });
  };

  const resetCategory = () => {
    dispatch({ type: "RESET_FILTER", payload: state.categories });
  };

  const ratingFilter = (value) => {
    dispatch({ type: "SORT_BY_RATING", payload: value });
  };

  useEffect(() => {
    getData();
    getWishlist();
  }, []);

  const filteredProducts =
    state.filter.sortBy === "min"
      ? state.productData.sort((a, b) => a.price - b.price)
      : state.filter.sortBy === "max"
      ? state.productData.sort((a, b) => b.price - a.price)
      : [...state.productData];

  return (
    <DataContext.Provider
      value={{
        ProductData: filteredProducts,
        CategoriesData: state.categories,
        sorter,
        filters: state.filter,
        filterCategory,
        categoryFiltered: state.filter.category,
        searchWith,
        searchFiltered: state.filter.search,
        resetCategory,
        ratingFilter,
        filteredRating: state.filter.ratingBy,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
