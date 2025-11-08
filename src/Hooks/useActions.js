import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as catalogActions from "../store/catalog/catalog.actions";
import * as topSalesActions from "../store/topSales/topSales.actions";
import {actions as catalog} from "../store/catalog/catalog.slice";
import * as productActions from "../store/product/product.actions";
import {actions as product} from "../store/product/product.slice";
import {actions as cart} from "../store/cart/cart.slice";
import * as cartActions from "../store/cart/cart.actions";

import { useMemo } from "react";

const rootActions = {
    ...cart,
    ...product,
    ...catalog,
    ...catalogActions,
    ...topSalesActions,
    ...productActions,
    ...cartActions
};

console.log("rootActions: ", rootActions);

export function useActions() {
    const dispatch = useDispatch();
    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
}