import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
// import { actions } from "../store";
import * as catalogActions from "../store/catalog/catalog.actions";
import * as topSalesActions from "../store/topSales/topSales.actions";
import { useMemo } from "react";

const rootActions = {
    // ...actions,
    ...catalogActions,
    ...topSalesActions,
    // ...actions.cart,
    // ...actions.user,
    // ...actions.order,
};

console.log("rootActions: ", rootActions);

export function useActions() {
    const dispatch = useDispatch();
    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
}