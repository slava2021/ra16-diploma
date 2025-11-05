import { BASE_URL } from "../config";

export const getCatalogUrl = (parameters) => {
    const url = new URL(`${BASE_URL}/${parameters.path}?offset=${parameters.offset}`);
    return url
}

export const getTopSalesUrl = (path) => {
    const url = new URL(`${BASE_URL}/${path}`);
    return url
}

export const getCategoriesUrl = () => {
    const url = new URL(`${BASE_URL}/categories`);
    return url
}

export const getItemUrl = (id) => {
    const url = new URL(`${BASE_URL}/items/${id}`);
    return url
}

