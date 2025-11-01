import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { catalogSlice } from "./catalog/catalog.slice";
import { topSalesSlice } from "./topSales/topSales.slice";

const reducers = combineReducers({
    catalog: catalogSlice.reducer,
    topSales: topSalesSlice.reducer
});

export const store = configureStore({
    reducer: reducers,
})
