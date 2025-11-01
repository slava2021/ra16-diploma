import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../config";

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

export const getTopSalesProducts = createAsyncThunk("topSales/getTopSalesProducts", 
    async(path, { rejectWithValue }) => {
        await delay(3000);
        try {
            const response = await fetch(`${BASE_URL}/${path}`);
            if (!response.ok) {
                throw new Error('Server Error!');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    });