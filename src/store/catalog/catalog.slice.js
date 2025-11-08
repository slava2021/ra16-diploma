import { createSlice } from "@reduxjs/toolkit";
import { getCatalogProducts, getCategoriesList } from "./catalog.actions";
import { LOAD_MAX_ITEMS_LIMIT } from "../../config";

const initialState = {
    catalogList: [],
    categoriesList: [{"id":0,"title":"Все"},],
    activeCategory: "Все",
    categoryId: 0,
    hasMore: true,
    filter: true,
    offset: 0,
    isLoading:false,
    error: null,
    searchQuery: '',
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
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload
            state.offset = 0
            state.catalogList = []
        },
        incrementOffset: (state) => {
            state.offset += LOAD_MAX_ITEMS_LIMIT
        },
        setActiveCategory:(state, action) => {
            state.activeCategory = action.payload
            state.offset = 0
            state.catalogList = []
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
                state.filter = false
                state.hasMore = action.payload.length === LOAD_MAX_ITEMS_LIMIT;
            })
            .addCase(getCategoriesList.fulfilled, (state, action) => {
                state.categoriesList = (state.categoriesList.length === 1) ? [...state.categoriesList, ...action.payload] : state.categoriesList
                state.filter = false
            })
            .addCase(getCatalogProducts.rejected, setError)
            .addCase(getCategoriesList.rejected, setError)

    },

})

export const {actions, reducers} = catalogSlice;
