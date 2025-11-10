import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from "./product.actions";

const initialState = {
    productItem: [],
    isLoading:true,
    error: null,
}

export const productSlice = createSlice({
    name: "product",
    initialState: initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(getProduct.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getProduct.fulfilled, (state, action) => {
            state.productItem = action.payload;
            state.isLoading = false;
        })
        .addCase(getProduct.rejected, (state, action) => {
            console.log(action);
            state.error = action.payload;
            state.isLoading = false;
        });
    },
});

export const { actions, reducer } = productSlice;