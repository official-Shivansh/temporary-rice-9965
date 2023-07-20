import SingleProduct from "./pages/SingleProduct";
import Navbar from "./components/common/Navbar"
import CartPage from "./components/Cart/cart"
import AllRoutes from "./routes/AllRoutes"

function App() {
  return (
    <>
      {/* <h1>ArtHub</h1> */}
      <SingleProduct />
      <h1>ArtHub</h1>
        <Navbar/>
      <AllRoutes/>

    </>
  );
}

export default App;
