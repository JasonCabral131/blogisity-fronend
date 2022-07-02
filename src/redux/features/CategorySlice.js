import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    categories: [],
    loading: false,
}
const slice =  createSlice({
    name: "category",
    initialState,
    reducers: {
        createCategory: (state, payload) => {
            state.category = [...state.category, payload.category];
        },
        updateCategory: (state, payload) => {

        },
        deleteCategory: (state, payload) => {

        },
        resetcategory: () => {
            return initialState;
          },
    }

})
export const categoryAction = slice.actions;
export default slice.reducer;