import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTopSalesUrl } from "../api";
import { fetchApi } from "../../utils/fetchApi";
import { errorHandling, errorMessage } from "../../utils/errorHandling";

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

export const getTopSalesProducts = createAsyncThunk("topSales/getTopSalesProducts", 
    async(path, { rejectWithValue }) => {
        await delay(3000);
        try {
        const response = await fetchApi.get(getTopSalesUrl(path));
        if (!response.ok) throw new Error(errorHandling(response));
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(errorMessage(error));
        }
    });