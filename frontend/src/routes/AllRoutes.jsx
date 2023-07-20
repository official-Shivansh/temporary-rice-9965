import { Route, Routes } from "react-router-dom";
import CartPage from "../components/Cart/cart";


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/cart" element={<CartPage />} />

    </Routes>
  )
};

export default AllRoutes;
