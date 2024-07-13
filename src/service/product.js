import http from "./config";

const product = {
    getProducts: async () => {
        try {
            const response = await http.get("/product");
            return response.data;
        } catch (error) {
            console.error("Error fetching products:", error);
            throw error;
        }
    },
    get: (id) => http.get(`/product/${id}`),
};

export default product;
