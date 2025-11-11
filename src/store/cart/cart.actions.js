import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchApi } from "../../utils/fetchApi";
import { getOrderUrl } from "../api";
import { errorHandling, errorMessage } from "../../utils/errorHandling";

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const sendOrderData = createAsyncThunk("cart/sendOrderData", 
    async(data, { rejectWithValue }) => {
        await delay(2000);
    try {
        const url = getOrderUrl();
        const response = await fetchApi.post(url, data);
    errorHandling(response);
    return response.status;
    } catch (error) {
    return rejectWithValue(errorMessage(error));
}});