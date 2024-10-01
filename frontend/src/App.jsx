import { useContext, useState } from "react";
import "./App.css";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Singleproduct from "./pages/Singleproduct";
import Navbar from "./components/Navbar";
import Errorpage from "./components/Errorpage";
import About from "./pages/About";
import Footer from "./components/Footer";
import Register from "./pages/auth/Register";
import LOgin from "./pages/auth/LOgin";
import { ThemeContext } from "./context/Context";
import Addblogs from "./components/Addblogs";
function App() {
  const [count, setCount] = useState(0);
  const { authorise } = useContext(ThemeContext);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={authorise === true ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/contact"
          element={authorise === true ? <Contact /> : <Navigate to="/login" />}
        />
        <Route
          path="/cart"
          element={authorise === true ? <Cart /> : <Navigate to="/login" />}
        />
        <Route
          path="/product"
          element={authorise === true ? <Product /> : <Navigate to="/login" />}
        />
        <Route path="/addblogpage" element={<Addblogs />} />
        <Route path="/singleproduct/:id" element={<Singleproduct />} />
        <Route path="/login" element={<LOgin />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
