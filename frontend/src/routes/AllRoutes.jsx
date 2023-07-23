import { Route, Routes } from "react-router-dom";
import CartPage from "../components/Cart/cart";
import ProfilePage from "../pages/ProfilePage";
import { SignupPage } from "../pages/SignupPage";
import Payment from "../pages/Payment";
import LoginPage from "../pages/LoginPage";
import Landing from "../components/landing/Landing";
import SingleProduct from "../pages/SingleProduct";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/register" element={<SignupPage />} />
      <Route path="/pay" element={<Payment />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/product/:id" element={<SingleProduct />} />
    </Routes>
  );
};
export default AllRoutes;
