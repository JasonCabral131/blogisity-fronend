import { categoryConstant } from "./../constants";

const initialState = {
  categories: [],
  loading: false,
};
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case categoryConstant.CATEGORY_REQUEST:
      return (state = {
        ...state,
        loading: true,
      });
    case categoryConstant.GET_CATEGORY_SUCCESS:
      console.log("payload", action.payload.categories)
      return (state = {
        ...state,
        categories: [...action.payload.categories],
        loading: false,
      });

    case categoryConstant.CREATE_CATEGORY_SUCCESS:
      return (state = {
        ...state,
        categories: [...state.categories, action.payload.category],
        loading: false,
      });

    case categoryConstant.UPDATE_CATEGORY_SUCCESS:
      return (state = {
        ...state,
        categories: updateCategories(state.categories, action.payload.category),
      });
    case categoryConstant.DELETE_CATEGORY_SUCCESS:
      return (state = {
        ...state,
        categories: deleteCategory(state.categories, action.payload.id),
      });
    default:
      return state;
  }
};

const updateCategories = (state, payload) => {
  return state.map((data) => {
    if (data.id === payload.id) {
      return payload;
    }
    return data;
  });
};
const deleteCategory = (state, id) => {
  return state.filter((data) => data.id !== id);
};
export default categoryReducer;
