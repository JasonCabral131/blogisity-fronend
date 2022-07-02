import { createSlice } from "@reduxjs/toolkit";
import { authAPI } from "./../services/authApi";
const initialState = {
    user: null,
    token: null,
    isloading: null,
    verified: false,
}
const slice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, payload) => {
            state.user = payload.user;
            state.token = payload.token;
            state.verified = true
        },
        resetCredentials: () => {
            return initialState;
          },
    },
    extraReducers: (builder) => {
         builder.addMatcher(
      authAPI.endpoints.signIn.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
      }
    );
    builder.addMatcher(
      authAPI.endpoints.changeProfile.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
      }
    );
    builder.addMatcher(
      authAPI.endpoints.changePassword.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
      }
    );
    }
})
export const { setCredentials, resetCredentials } = slice.actions;

export default slice.reducer;