import { BASE_URL } from "../config";

export const getCatalogUrl = (parameters) => {
    
    const params = new URLSearchParams(parameters);
    const pathName = params.get("path");

    params.delete("path");

    if (params.get("categoryId") === "0") {
        params.delete("categoryId");
    }

    if ( parameters.q === "") {
        params.delete("q");
    }

    const url = new URL(`${BASE_URL}/${pathName}?${params.toString()}`);
    return url
}

export const getTopSalesUrl = (path) => {
    const url = new URL(`${BASE_URL}/${path}`);
    return url
}

export const getCategoriesUrl = (path) => {
    const url = new URL(`${BASE_URL}/${path}`);
    return url
}

export const getItemUrl = (id) => {
    const url = new URL(`${BASE_URL}/items/${id}`);
    return url
}

export const getOrderUrl = () => {
    const url = new URL(`${BASE_URL}/order`);
    return url
}

