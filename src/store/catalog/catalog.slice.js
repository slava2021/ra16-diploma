import { createSlice } from "@reduxjs/toolkit";
import { getCatalogProducts, getCategoriesList } from "./catalog.actions";
import { LOAD_MAX_ITEMS_LIMIT } from "../../config";

const initialState = {
    catalogList: [],
    categoriesList: [{"id":0,"title":"Все"},],
    activeCategory: "Все",
    categoryId: 0,
    hasMore: true,
    offset: 0,
    isLoading:false,
    error: null,
}

const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
    state.isLoading = false;
}

export const catalogSlice = createSlice({
    name: "catalog",
    initialState: initialState,
    reducers: {
        incrementOffset: (state) => {
            state.offset += LOAD_MAX_ITEMS_LIMIT
        },
        setActiveCategory:(state, action) => {
            console.log("setActiveCategory: ", action.payload);
            state.activeCategory = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCatalogProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCatalogProducts.fulfilled, (state, action) => {
                state.catalogList = [...state.catalogList, ...action.payload];
                state.isLoading = false;
                state.hasMore = action.payload.length === LOAD_MAX_ITEMS_LIMIT;
            })
            .addCase(getCatalogProducts.rejected, setError)
            .addCase(getCategoriesList.fulfilled, (state, action) => {
                state.categoriesList = [...state.categoriesList, ...action.payload]
            })
    },

})

export const {actions, reducers} = catalogSlice;
