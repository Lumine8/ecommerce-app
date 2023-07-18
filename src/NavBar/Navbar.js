import { Link, NavLink, Route, Routes } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineUser,
} from "react-icons/ai";

import Mockman from "mockman-js";

import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Wishlist from "../Pages/Wishlist";
import Cart from "../Pages/Cart";
import Login from "../Pages/loginAndRegister/Login";
import Register from "../Pages/loginAndRegister/Register";
import ProductDetails from "../Pages/Subpages/Product/ProductDetails";
import logo from "../Assets/logo.svg";
import { AuthRequired } from "../Pages/OtherComponents/RequiresAuth";
import UserProfile from "../Pages/UserDetails/UserProfile";
import CheckOut from "../Pages/CheckOutModal/CheckOutPage";
import Loader from "../Pages/Loader/Loader";
import ErrorPage from "../Pages/Error/ErrorPage";

export default function Navbar() {
  return (
    <div>
      {" "}
      <div className="navbar-container">
        <Link className="logo" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <nav id="navbar">
          <NavLink className="navlink" to="/products">
            Products
          </NavLink>
          <NavLink className="navlink" to="/wishlist">
            <AiOutlineHeart />
          </NavLink>
          <NavLink className="navlink" to="/cart">
            <AiOutlineShoppingCart />
          </NavLink>
          <NavLink className="navlink" to="/profile">
            <AiOutlineUser size={19} style={{ verticalAlign: "Top" }} />
          </NavLink>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/cart"
          element={
            <AuthRequired>
              <Cart />
            </AuthRequired>
          }
        />
        <Route
          path="/wishlist"
          element={
            <AuthRequired>
              <Wishlist />
            </AuthRequired>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <AuthRequired>
              <UserProfile />
            </AuthRequired>
          }
        />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<CheckOut/>}/>
        <Route path="/loader" element={<Loader/>} />
        <Route path="/error" element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
}
