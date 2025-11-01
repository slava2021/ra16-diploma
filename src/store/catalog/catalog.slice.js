import { createSlice } from "@reduxjs/toolkit";
import { getCatalogProducts } from "./catalog.actions";
import { LOAD_MAX_ITEMS_LIMIT } from "../../config";

const initialState = {
    catalogList: [],
    hasMore: true,
    offset: 6,
    isLoading:false,
    error: null,
}

export const catalogSlice = createSlice({
    name: "catalog",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCatalogProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCatalogProducts.fulfilled, (state, action) => {
                console.log(action.payload);
                state.offset += LOAD_MAX_ITEMS_LIMIT;
                state.catalogList = [...state.catalogList, ...action.payload];
                state.isLoading = false;
                state.hasMore = action.payload.length === LOAD_MAX_ITEMS_LIMIT;
            })
            .addCase(getCatalogProducts.rejected, (state, action) => {
                state.error = action.error.message;
                state.isLoading = false;
            });
    },

})
