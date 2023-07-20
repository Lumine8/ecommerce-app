import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";
import { INITTAL_STATE, productReducer } from "../Reducer/reducer";
import { AuthContext } from "./AuthProvider";

export const DataContext = createContext();
export function DataProvider({ children }) {
  const { getAddress, setGetAddress } = useContext(AuthContext);

  const [state, dispatch] = useReducer(productReducer, INITTAL_STATE);

  const [newAddress, setnewAddress] = useState({
    street: "",
    state: "",
    city: "",
    pincode: "",
  });

  const [address, setAddress] = useState([...getAddress]);

  const [getProduct, setGetProduct] = useState({
    _id: 123,
    category: "Loading",
    title: "Loading",
    desc: "Loading",
    image:
      "https://realfood.tesco.com/media/images/RaspberryCremeschnitte-LGH-mini-9f2c763c-0724-4fce-9632-965e842cc98e-0-1400x919.jpg",
    thumbnail:
      "https://realfood.tesco.com/media/images/RaspberryCremeschnitte-LGH-mini-9f2c763c-0724-4fce-9632-965e842cc98e-0-1400x919.jpg",
    rating: "0.0",
    price: "Loading",
  });

  // {headers: autherization:"encodedTokens"}

  const getData = async () => {
    dispatch({
      type: "IS_LOADING",
      payload: true,
    });
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
      dispatch({
        type: "IS_ERROR",
        payload: true,
      });
      console.log(e);
    }
  };

  const getProductById = async (product) => {
    dispatch({
      type: "IS_LOADING",
      payload: true,
    });
    try {
      const response = await axios.get(`/api/products/${product}`);
      if (response?.status === 200 || response?.status === 201) {
        setGetProduct(response?.data?.product);
        dispatch({
          type: "IS_LOADING",
          payload: false,
        });
      }
    } catch (e) {
      dispatch({
        type: "IS_ERROR",
        payload: true,
      });
      console.log(e);
    }
  };

  const getWishlist = async () => {
    dispatch({
      type: "IS_LOADING",
      payload: true,
    });
    const loginVal = JSON.parse(localStorage.getItem("loginId"));
    try {
      const wishlistReponse = await axios.get("/api/user/wishlist", {
        headers: { authorization: loginVal.encodedToken },
      });

      if (wishlistReponse.status === 200 || wishlistReponse.status === 201) {
        dispatch({
          type: "GET_WISHLIST_DATA",
          payload: wishlistReponse?.data?.wishlist,
        });
      }
    } catch (e) {
      dispatch({
        type: "IS_ERROR",
        payload: true,
      });
      console.log(e);
    }
  };

  const addToWishlist = async (product) => {
    dispatch({
      type: "IS_LOADING",
      payload: true,
    });
    const loginVal = JSON.parse(localStorage.getItem("loginId"));
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        { product },
        { headers: { authorization: loginVal.encodedToken } }
      );
      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: "GET_WISHLIST_DATA",
          payload: response?.data?.wishlist,
        });
      }
    } catch (e) {
      dispatch({
        type: "IS_ERROR",
        payload: true,
      });
      console.log(e);
    }
  };

  const deleteFromWishlist = async (product) => {
    dispatch({
      type: "IS_LOADING",
      payload: true,
    });
    const loginVal = JSON.parse(localStorage.getItem("loginId"));
    try {
      const response = await axios.delete(`/api/user/wishlist/${product._id}`, {
        headers: { authorization: loginVal.encodedToken },
      });
      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: "REMOVE_FROM_WISHLIST",
          payload: response?.data?.wishlist,
        });
      }
    } catch (e) {
      dispatch({
        type: "IS_ERROR",
        payload: true,
      });
      console.log(e);
    }
  };

  // Getting cart data, adding to cart and deleting to cart
  const getCartData = async () => {
    dispatch({
      type: "IS_LOADING",
      payload: true,
    });
    const loginVal = JSON.parse(localStorage.getItem("loginId"));
    try {
      const response = await axios.get("/api/user/cart", {
        headers: { authorization: loginVal.encodedToken },
      });

      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: "GET_CART_DATA",
          payload: response?.data?.cart,
        });
      }
    } catch (e) {
      dispatch({
        type: "IS_ERROR",
        payload: true,
      });
      console.log(e);
    }
  };

  const addToCart = async (product) => {
    const loginVal = JSON.parse(localStorage.getItem("loginId"));
    try {
      const response = await axios.post(
        "/api/user/cart",
        { product },
        { headers: { authorization: loginVal.encodedToken } }
      );
      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: "GET_CART_DATA",
          payload: response?.data?.cart,
        });
      }
    } catch (e) {
      dispatch({
        type: "IS_ERROR",
        payload: true,
      });
      console.log(e);
    }
  };

  const deleteFromCart = async (product) => {
    const loginVal = JSON.parse(localStorage.getItem("loginId"));
    console.log(product);
    try {
      const response = await axios.delete(`/api/user/cart/${product._id}`, {
        headers: { authorization: loginVal.encodedToken },
      });
      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: "REMOVE_FROM_CART",
          payload: response?.data?.cart,
        });
      }
    } catch (e) {
      dispatch({
        type: "IS_ERROR",
        payload: true,
      });
      console.log(e);
    }
  };
  const IncrementCartData = async (product) => {
    const loginVal = JSON.parse(localStorage.getItem("loginId"));
    try {
      const response = await axios.post(
        `/api/user/cart/${product._id}`,
        {
          action: {
            type: "increment",
          },
        },
        {
          headers: {
            authorization: loginVal.encodedToken,
          },
        }
      );
      if (response.status === 200 || response.status === 201) {
        dispatch({
          type: "GET_CART_DATA",
          payload: response?.data?.cart,
        });
      }
    } catch (e) {
      dispatch({
        type: "IS_ERROR",
        payload: true,
      });
      console.log(e);
    }
  };

  const DecrementCartData = async (product) => {
    const loginVal = JSON.parse(localStorage.getItem("loginId"));
    try {
      const response = await axios.post(
        `/api/user/cart/${product._id}`,
        {
          action: {
            type: "decrement",
          },
        },
        {
          headers: {
            authorization: loginVal.encodedToken,
          },
        }
      );
      if (response.status === 200 || response.status === 201) {
        console.log(
          state?.cartData?.filter((items) => items._id === product._id)[0].qty
        );
        if (
          state?.cartData?.filter((items) => items._id === product._id)[0]
            ?.qty === 1 && state?.cartData?.filter((items) => items._id === product._id)[0]
            ?.qty >= 1
        ) {
          deleteFromCart(product);
        }
        dispatch({
          type: "GET_CART_DATA",
          payload: response?.data?.cart,
        });
      }
    } catch (e) {
      dispatch({
        type: "IS_ERROR",
        payload: true,
      });
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
    getData()
  };

  const ratingFilter = (value) => {
    dispatch({ type: "SORT_BY_RATING", payload: value });
  };

  useEffect(() => {
    getData();
    getWishlist();
    getCartData();
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
        getProduct,
        getProductById,
        state,
        addToWishlist,
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
        addCartItem: addToCart,
        deleteFromWishlist,
        wishlistItems: state.wishlist,
        RemoveFromCart: deleteFromCart,
        DecrementCartData,
        IncrementCartData,
        cartItems: state.cartData,
        setGetAddress,
        getAddress,
        newAddress,
        setnewAddress,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
