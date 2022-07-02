import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { rootState } from "../store";
import {api} from "./../../config/api"
export const reduxAPI = createApi({
    reducerPath: "reduxAPI",
    tagTypes: [
        "Category",
        "Blogs",
        "Announcement",
        "Writers",
    ],
    baseQuery: fetchBaseQuery({
        baseUrl: api.localApi,
        prepareHeaders: (headers, { getState }) => {
            const token = rootState.auth.token;
            if (token) {
              headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
          },
    }),
    endpoints: () => ({}),
})