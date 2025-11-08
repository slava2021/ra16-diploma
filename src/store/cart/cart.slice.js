import { createSlice } from "@reduxjs/toolkit";
import { sendOrderData } from "./cart.actions";

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    isLoading:false,
    response: null,
    error: null,
}

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            // state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
            state.cartItems.push(action.payload);
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        deleteFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(sendOrderData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(sendOrderData.fulfilled, (state, action) => {
                console.log("Response: ", action.payload);
                state.response = action.payload
                state.isLoading = false;
                // state.isLoading = setTimeout(() => state.isLoading = false, 3000);
            })
            .addCase(sendOrderData.rejected, (state) => {
                state.isLoading = false;
            })
    }
})

export const { actions, reducers } = cartSlice