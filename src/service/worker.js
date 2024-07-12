
// import http from "./config";

// const worker = {
//   get: (params) => http.get("/workers", { params}),
//   add: (data) => http.post("/worker", data),
//   // update: (data) => http.put("/service/", data),
//   delete: (id) => http.delete("/worker", { params: { id } }),
// };

// export default worker;


import http from "./config";

const workers = {
  get: (params) => http.get("/workers", { params }),
  add: (data) => http.post("/worker", data),
  update: (data) => http.put("/worker", data),
  delete: (id) => http.delete(`/worker/${id}`),
};

export default workers;
