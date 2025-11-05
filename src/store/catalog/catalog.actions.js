import { createAsyncThunk } from "@reduxjs/toolkit";
import {api} from "../../utils/fetchApi";
import { getCatalogUrl, getCategoriesUrl } from "../api";

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

export const getCatalogProducts = createAsyncThunk("catalog/getCatalogProducts", 

    async(parameters, { rejectWithValue }) => {
        
        await delay(2000);
        try {
            const data = await api.get(getCatalogUrl(parameters));
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    });

export const getCategoriesList = createAsyncThunk("catalog/getCategoriesList", 
    async(path, { rejectWithValue }) => {
        try {
        const data = await api.get(getCategoriesUrl());
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    });