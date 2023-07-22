import { Route, Routes } from "react-router-dom";
import CartPage from "../components/Cart/cart";
import ProfilePage from "../pages/ProfilePage";

import { SignupPage } from "../pages/SignupPage";
import Payment from "../pages/Payment";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/cart" element={<CartPage />} />

      <Route path="/profile" element={<ProfilePage />} />

      <Route path="/register" element={<SignupPage />} />

      <Route path="/pay" element={<Payment />} />

    </Routes>
  );
};
export default AllRoutes;
