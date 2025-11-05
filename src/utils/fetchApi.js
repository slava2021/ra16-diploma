export const api = {
    get: async (path) => {
        const response = await fetch(path);
        if (!response.ok) {
            throw new Error('Server Error!');
        }
        const data = await response.json();
        return data;
    },
};