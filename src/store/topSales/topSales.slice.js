import { createSlice } from "@reduxjs/toolkit";
import { getTopSalesProducts } from "./topSales.actions";

const initialState = {
    topSalesList: [],
    isLoading:false,
    error: null,
}

export const topSalesSlice = createSlice({
    name: "topSales",
    initialState: initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTopSalesProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getTopSalesProducts.fulfilled, (state, action) => {
                state.topSalesList = action.payload;
                state.isLoading = false;
            })
            .addCase(getTopSalesProducts.rejected, (state, action) => {
                state.error = action.error.message;
                state.isLoading = false;
            });
    },

})
export const { testTopSales } = topSalesSlice.actions