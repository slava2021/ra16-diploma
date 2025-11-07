import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as catalogActions from "../store/catalog/catalog.actions";
import * as topSalesActions from "../store/topSales/topSales.actions";
import {actions as catalog} from "../store/catalog/catalog.slice";
import * as productActions from "../store/product/product.actions";
import {actions as product} from "../store/product/product.slice";

import { useMemo } from "react";

const rootActions = {
    ...product,
    ...catalog,
    ...catalogActions,
    ...topSalesActions,
    ...productActions
};

console.log("rootActions: ", rootActions);

export function useActions() {
    const dispatch = useDispatch();
    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
}