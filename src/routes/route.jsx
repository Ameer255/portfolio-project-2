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
import CheckOut from "../pages/check-out/checkOut";
import OrderPlaced from "../pages/order-placed/orderPlaced";



export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="shop/products/:id" element={<ProductDetailsPage />} />
      <Route path="cart" element={<Cart />} />
      <Route path="checkout" element={<CheckOut />} />
      <Route path="contact" element={<Contact />} />
      <Route path="order-placed" element={<OrderPlaced />} />
      
    </Route>


  )
);


