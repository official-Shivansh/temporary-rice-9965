import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import CartPage from "./components/Cart/cart";
import AllRoutes from "./routes/AllRoutes";

import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <>
      <AllRoutes />
      {location.pathname === "/register" ||
      location.pathname === "/login" ? null : (
        <>
          <Navbar />
        </>
      )}
      {location.pathname === "/register" ||
      location.pathname === "/login" ? null : (
        <>
          <Footer />
        </>
      )}
    </>
  );
}
export default App;
