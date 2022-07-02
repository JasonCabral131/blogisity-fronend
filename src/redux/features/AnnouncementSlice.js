import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    Annoucement: [],
    loading: false,
}
const slice =  createSlice({
    name: "announcement",
    initialState,
    reducers: {
        createCategory: (state, payload) => {
            state.announcement = [...state.announcement, payload.announcement];
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
export const AnnouncementAction = slice.actions;
export default slice.reducer;