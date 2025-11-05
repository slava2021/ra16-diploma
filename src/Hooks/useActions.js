import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as catalogActions from "../store/catalog/catalog.actions";
import * as topSalesActions from "../store/topSales/topSales.actions";
import {actions as catalog} from "../store/catalog/catalog.slice";

import { useMemo } from "react";

const rootActions = {
    ...catalog,
    ...catalogActions,
    ...topSalesActions,
};

console.log("rootActions: ", rootActions);

export function useActions() {
    const dispatch = useDispatch();
    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
}