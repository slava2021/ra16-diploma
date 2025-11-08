import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchApi } from "../../utils/fetchApi";
import { getOrderUrl } from "../api";

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

export const sendOrderData = createAsyncThunk("cart/sendOrderData", () => {
    async (parameters, { rejectWithValue }) => {
        console.log("sendOrderData: ", parameters);
        alert("Заказ отправлен");
        // await delay(1000);
        // try {
        //     const data = await fetchApi.post(getOrderUrl(parameters));
        //     return data;
        // } catch (error) {
        //     return rejectWithValue(error.message);
        // }
    }
});