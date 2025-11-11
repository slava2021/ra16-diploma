import { errorHandling } from "./errorHandling";

export const fetchApi = {
    get: async (path) => {
        const response = await fetch(path);
        errorHandling(response);
        return response;
    },
    post: async (path, data) => {

        const response = await fetch(`${path.href}`,
         {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        return response
        }
    }

