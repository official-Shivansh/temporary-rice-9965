import { Route, Routes } from "react-router-dom";
import CartPage from "../components/Cart/cart";
import ProfilePage from "../pages/ProfilePage";
import { SignupPage } from "../pages/SignupPage";
import Payment from "../pages/Payment";
import LoginPage from "../pages/LoginPage";
import Landing from "../components/landing/Landing"
import FavoriteItemsPage from "../pages/Favourite";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/register" element={<SignupPage />} />
      <Route path="/pay" element={<Payment />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/fav" element={<FavoriteItemsPage />} />
    </Routes>
  );
};
export default AllRoutes;
