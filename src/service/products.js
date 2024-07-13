
import http from "./config";

const products = {
  get: (params) => http.get("/products", { params}),
  add: (data) => http.post("/product", data),
  update: (data) => http.put("/service/", data),
  delete: (id) => http.delete(`/product/${id}`),
};

export default products;
