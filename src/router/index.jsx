import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import { SignIn,Main, Products, Home, Worker, ProductSinglePage } from "@pages";
const Index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Workers" element={<Worker />} />
          <Route path='/ProductSinglePage/:id' element={<ProductSinglePage />} />
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};
export default Index;
