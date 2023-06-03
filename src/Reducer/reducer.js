export const INITTAL_STATE = {
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
        productData: action.payload,
      };

    case "GET_CATEGORIES":
      const categories = action.payload.reduce((acc, cur) => {
        return {
          ...acc,
          [cur.categoryName]: false,
        };
      }, {});
      return {
        ...state,
        categories: action.payload,
        filter: {
          ...state.filter,
          category: categories,
        },
      };

    case "GET_WISHLIST_DATA":
      return {
        ...state,
        wishlist:action.payload
      };

    case "SORT":
      return {
        ...state,
        filter: {
          ...state.filter,
          sortBy: action.payload,
        },
      };
    case "CATEGORY_FILTER":
      return {
        ...state,
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
        filter: {
          ...state.filter,
          search: action.payload,
        },
      };
    case "SORT_BY_RATING":
      return {
        ...state,
        filter: {
          ...state.filter,
          ratingBy: action.payload,
        },
      };
    case "RESET_FILTER":
      const resetCategory = action.payload.reduce((acc, cur) => {
        return {
          ...acc,
          [cur.categoryName]: false,
        };
      }, {});
      return {
        ...state,
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
      };
  }
};
