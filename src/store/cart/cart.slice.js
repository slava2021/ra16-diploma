import { createSlice } from "@reduxjs/toolkit";
import { sendOrderData } from "./cart.actions";

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    isLoading:false,
    response: null,
    error: null,
    status: null
}

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartItems.findIndex(item => item.id === action.payload.id && item.size === action.payload.size);  
            console.log("existingItem: ", existingItem)
            if (existingItem !== -1) {
                state.cartItems[existingItem].quantity += action.payload.quantity;
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
                console.log("state.cartItems: ", state.cartItems);
            } else {
                state.cartItems.push(action.payload);
            } 
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        deleteFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => !(item.id === action.payload.id && item.size === action.payload.size));
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        clearOrderResponse: (state) => {
            state.response = null
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(sendOrderData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(sendOrderData.fulfilled, (state, action) => {
                state.response = action.payload
                localStorage.clear();
                state.cartItems = [];
                state.isLoading = false;
                // state.isLoading = setTimeout(() => state.isLoading = false, 1000);
                
            })
            .addCase(sendOrderData.rejected, (state, action) => {
                state.isLoading = false;
                state.status = 'rejected';
                state.error = action.payload;
            })
    }
})

export const { actions, reducers } = cartSlice