import { createAsyncThunk } from "@reduxjs/toolkit";
import {fetchApi} from "../../utils/fetchApi";
import { getCatalogUrl, getCategoriesUrl } from "../api";
import { errorMessage, errorHandling } from "../../utils/errorHandling";

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }



export const getCatalogProducts = createAsyncThunk("catalog/getCatalogProducts", 

    async(parameters, { rejectWithValue }) => {

        await delay(2000);
        try {
            const response = await fetchApi.get(getCatalogUrl(parameters))
            if (!response.ok) throw new Error(errorHandling(response));
            const data = await response.json();
            return data;
        } catch (error) {
           return rejectWithValue(errorMessage(error));
        }
    });

export const getCategoriesList = createAsyncThunk("catalog/getCategoriesList", 
    async(path, { rejectWithValue }) => {
        await delay(2000);
        try {
        const response = await fetchApi.get(getCategoriesUrl(path));
        if (!response.ok) throw new Error(errorHandling(response));
        const data = await response.json();
        return data;
        } catch (error) {
            return rejectWithValue(errorMessage(error));
        }
    });