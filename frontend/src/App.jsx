
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer"
import CartPage from "./components/Cart/cart"
import AllRoutes from "./routes/AllRoutes"
import Landing from "./components/landing/landing";
function App() {
  return (
    <>
      {/* <h1>ArtHub</h1> */}
        <Navbar/>
        <Landing/>
      <AllRoutes/>
        <Footer/>
    </>
  )
}

export default App
