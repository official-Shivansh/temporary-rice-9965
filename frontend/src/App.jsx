import Navbar from "./components/common/Navbar";
import CartPage from "./components/Cart/cart";
import AllRoutes from "./routes/AllRoutes";
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/register" ||
      location.pathname === "/login" ? null : (
        <Navbar />
      )}

      <AllRoutes />
    </>
  );
}
export default App;
