import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    blog: [],
    loading: false,
}
const slice =  createSlice({
    name: "blog",
    initialState,
    reducers: {
        createBlog: (state, payload) => {
            state.blog = [...state.blog, payload.blog];
        },
        updateBlog: (state, payload) => {

        },
        deleteBlog: (state, payload) => {

        },
        resetBlog: () => {
            return initialState;
          },
    }

})
export const blogAction = slice.actions;
export default slice.reducer;