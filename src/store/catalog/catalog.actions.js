import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL, LOAD_MAX_ITEMS_LIMIT } from "../../config";

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

export const getCatalogProducts = createAsyncThunk("catalog/getCatalogProducts", 
    
    async(setts, { rejectWithValue }) => {
        console.log("setts: ", setts);
        await delay(2000);
        try {
            const response = await fetch(`${BASE_URL}/${setts.path}?offset=${setts.offset}`);
            if (!response.ok) {
                throw new Error('Server Error!');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    });