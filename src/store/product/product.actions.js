import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchApi } from "../../utils/fetchApi";
import { getItemUrl } from "../api";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getProduct = createAsyncThunk("product/getProduct", 
    async(id, { rejectWithValue }) => {
        await delay(3000);
        try {
        const data = await fetchApi.get(getItemUrl(id));
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    });
