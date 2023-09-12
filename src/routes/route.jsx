import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import Shop from "../pages/shop";
import Contact from "../pages/Contact";
import Cart from "../pages/shopping-cart/cart";
import ProductDetailsPage from "../components/product-detail-page/productDetailsPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/products/:id" element={<ProductDetailsPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="contact" element={<Contact />} />
    </Route>


  )
);
