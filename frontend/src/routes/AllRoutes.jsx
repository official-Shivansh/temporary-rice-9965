import { Route, Routes } from "react-router-dom";
import CartPage from "../components/Cart/cart";
import ProfilePage from "../pages/ProfilePage";
import { SignupPage } from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/cart" element={<CartPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/register" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
export default AllRoutes;
