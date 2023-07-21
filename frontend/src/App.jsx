

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer"
import CartPage from "./components/Cart/cart"
import AllRoutes from "./routes/AllRoutes"
import Landing from "./components/landing/landing";

import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <>

     {location.pathname === "/register" ||
      location.pathname === "/login" ? null : (
        <Navbar />
      )}
 
    
        <Landing/>
      <AllRoutes/>
        <Footer/>


    </>
  );
}
export default App;
