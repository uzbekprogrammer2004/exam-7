import http from "./config";

const category = {
    get: (params) => http.get("/products",{ params: {page: 1, limit: 20}}),
}

export default category;