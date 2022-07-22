import { blogConstant } from "./../constants";

const INITIAL_STATE = {
  latestBlog: [],
  currentBlogView: [],
  categoryBlogView: [],
};

const blogReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case blogConstant.GET_LATEST_BLOG_SUCCESS: 
        return (state = {
            ...state,
            latestBlog: action.payload.latestBlog,
          });
        default:
            return state;
    }
};
export default blogReducer;
