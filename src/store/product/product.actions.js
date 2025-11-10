import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchApi } from "../../utils/fetchApi";
import { getItemUrl } from "../api";
import { errorHandling, errorMessage } from "../../utils/errorHandling";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getProduct = createAsyncThunk("product/getProduct", 
    async(id, { rejectWithValue }) => {
        await delay(2000);
        try {
        const response = await fetchApi.get(getItemUrl(id));
        if (!response.ok) throw new Error(errorHandling(response));
        const data = await response.json();
        return data;
        } catch (error) {
            return rejectWithValue(errorMessage(error));
        }
    });
