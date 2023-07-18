export const INITTAL_STATE = {
  Loader: true,
  error: false,
  filter: {
    ratingBy: 0,
    sortBy: "",
    category: {},
    search: "",
  },
  productData: [],
  categories: [],
  wishlist: [],
  cartData: [],
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCT_DATA":
      return {
        ...state,
        Loader: false,
        productData: action.payload,
      };
    case "IS_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    case "IS_LOADING":
      return {
        ...state,
        Loader: action.payload,
      };

    case "GET_CATEGORIES":
      const categories = action.payload.reduce((acc, cur) => {
        return {
          ...acc,
          Loader: false,
          [cur.categoryName]: false,
        };
      }, {});
      return {
        ...state,
        Loader: false,
        categories: action.payload,
        filter: {
          ...state.filter,
          category: categories,
        },
      };

    case "GET_WISHLIST_DATA":
      return {
        ...state,
        Loader: false,
        wishlist: action.payload,
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        Loader: false,
        wishlist: action.payload.filter((item) => item !== action.payload),
      };
    case "GET_CART_DATA":
      return {
        ...state,
        Loader: false,
        cartData: action.payload,
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        Loader: false,
        cartData: action.payload,
      };

    case "SORT":
      return {
        ...state,
        Loader: false,
        filter: {
          ...state.filter,
          sortBy: action.payload,
        },
      };
    case "CATEGORY_FILTER":
      return {
        ...state,
        Loader: false,
        filter: {
          ...state.filter,
          category: {
            ...state.filter.category,
            [action.payload]: !state.filter.category[action.payload],
          },
        },
      };
    case "SEARCH_FILTER":
      return {
        ...state,
        Loader: false,
        filter: {
          ...state.filter,
          search: action.payload,
        },
      };
    case "SORT_BY_RATING":
      return {
        ...state,
        Loader: false,
        filter: {
          ...state.filter,
          ratingBy: action.payload,
        },
      };
    case "RESET_FILTER":
      const resetCategory = action.payload.reduce((acc, cur) => {
        return {
          ...acc,
          Loader: false,
          [cur.categoryName]: false,
        };
      }, {});
      return {
        ...state,
        Loader: false,
        filter: {
          ratingBy: 0,
          sortBy: "",
          search: "",
          category: resetCategory,
        },
      };

    default:
      return {
        ...state,
        Loader: false,
      };
  }
};
