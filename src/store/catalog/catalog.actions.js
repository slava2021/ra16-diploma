import { createAsyncThunk } from "@reduxjs/toolkit";
import {fetchApi} from "../../utils/fetchApi";
import { getCatalogUrl, getCategoriesUrl } from "../api";

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

export const getCatalogProducts = createAsyncThunk("catalog/getCatalogProducts", 

    async(parameters, { rejectWithValue }) => {
        await delay(2000);
        try {
            const data = await fetchApi.get(getCatalogUrl(parameters));
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    });

export const getCategoriesList = createAsyncThunk("catalog/getCategoriesList", 
    async(path, { rejectWithValue }) => {
        await delay(2000);
        try {
        const data = await fetchApi.get(getCategoriesUrl(path));
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    });