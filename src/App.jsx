import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./pages/Home/Home";
import Cart from "./pages/cart/Cart";
import AllProducts from "./components/AllProducts/AllProducts";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import toast, { Toaster } from "react-hot-toast";
import { auth } from "./FirebaseAuth/FirebaseAuth";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import About from "../src/components/About/About";
import Contact from "./components/contact/Contact";

import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  const [cart, setCart] = useState([]);
  const [promocode, setPromocode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [invalid, setInvalid] = useState("");

  const [userName, setUserName] = useState("");

  //Add to Cart
  const AddToCart = (product) => {
    const isProductExist = cart.find((findItem) => findItem.id === product.id);
    if (isProductExist) {
      const updateCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updateCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      toast.success("Product Added to cart");
    }
  };

  //increase quantity
  const handleInc = (id) => {
    const incQuantity = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(incQuantity);
  };

  //decrease quantity
  const handleDec = (id) => {
    const decQuantity = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(decQuantity);
  };

  //Remove Item
  const handleRemove = (id) => {
    const updateByFilter = cart.filter((filterItem) => filterItem.id !== id);
    setCart(updateByFilter);
  };

  //Calculate total price
  const getTotalPrice = () => {
    const totalPrice = cart.reduce((total, cartReduceItem) => {
      return total + cartReduceItem.price * cartReduceItem.quantity;
    }, 0);
    return totalPrice - discount;
  };

  //Calculate total price with 10 dilvry charges
  const getTotalPlusTen = () => {
    return getTotalPrice() + 10;
  };

  //PromoCode
  const applyPromoCode = () => {
    if (promocode === "DISCOUNT10") {
      setDiscount(getTotalPrice() * 0.1);
      setPromocode("");
    } else {
      setInvalid("Invalid Promocode");
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });
  }, []);

  return (
    <>
    <BrowserRouter>
      <Navbar cart={cart} userName={userName} />
      <Routes>
        <Route path="/" element={<Home AddToCart={AddToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              handleDec={handleDec}
              handleInc={handleInc}
              handleRemove={handleRemove}
              getTotalPrice={getTotalPrice}
              getTotalPlusTen={getTotalPlusTen}
              applyPromoCode={applyPromoCode}
              promocode={promocode}
              setPromocode={setPromocode}
              invalid={invalid}
            />
          }
        />
        <Route
          path="/allproducts"
          element={<AllProducts AddToCart={AddToCart} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route
          path="/singleProduct/:productId"
          element={<SingleProduct AddToCart={AddToCart} />}
        />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonial" element={<Testimonials />} />
      </Routes>
      <Toaster />
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
