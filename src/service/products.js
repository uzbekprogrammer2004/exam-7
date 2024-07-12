
import http from "./config";

const products = {
  get: (params) => http.get("/products", { params}),
  add: (data) => http.post("/products", data),
  update: (data) => http.put("/service/", data),
  delete: (product_id) => http.delete(`/products? ${product_id}`),
};

export default products;
