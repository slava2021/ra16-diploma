import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { catalogSlice } from "./catalog/catalog.slice";
import { topSalesSlice } from "./topSales/topSales.slice";
import { productSlice } from "./product/product.slice";

const reducers = combineReducers({
    product: productSlice.reducer,
    catalog: catalogSlice.reducer,
    topSales: topSalesSlice.reducer
});

export const store = configureStore({
    reducer: reducers,
})
