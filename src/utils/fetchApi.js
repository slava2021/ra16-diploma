import { errorHandling } from "./errorHandling";

export const fetchApi = {
    get: async (path) => {
        const response = await fetch(path);
        errorHandling(response);
        return response;
    },
    post: async (path, data) => {

        console.log("POST data: ", JSON.stringify(data), data, "POST path: ", path.href);

        const response = await fetch(`${path.href}`,
         {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        return response
        }
    }

