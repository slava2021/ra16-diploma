import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTopSalesUrl } from "../api";
import { api } from "../../utils/fetchApi";

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

export const getTopSalesProducts = createAsyncThunk("topSales/getTopSalesProducts", 
    async(path, { rejectWithValue }) => {
        await delay(3000);
        try {
        const data = await api.get(getTopSalesUrl(path));
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    });