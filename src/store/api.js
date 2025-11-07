import { BASE_URL } from "../config";

export const getCatalogUrl = (parameters) => {

    // console.log("parameters: ", parameters);
    
    const params = new URLSearchParams(parameters);
    const categoryName = params.get("path");

    // console.log("New UTLSearchParams: ", params.toString());

    params.delete("path");

    if (params.get("categoryId") === "0") {
        params.delete("categoryId");
    }

  
    // console.log("After Delte: ", params.toString());
   

   

    // http://localhost:7070/api/items?categoryId=X&offset=X


    console.log("params: ", categoryName + "?" + params.toString());

    const url = new URL(`${BASE_URL}/${categoryName}?${params.toString()}`);
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

