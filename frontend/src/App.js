import "./App.css";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import React, { useState } from "react";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LoginSignup from "./component/User/LoginSignup";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions.js";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile.js";
import UpdateProfile from "./component/User/UpdateProfile.js";
import UpdatePassword from "./component/User/UpdatePassword.js";
import ForgotPassword from "./component/User/ForgotPassword.js";
import ResetPassword from "./component/User/ResetPassword.js";
import Cart from "./component/Cart/Cart.js";
import Wishlist from "./component/Cart/Wishlist.js";
import Shipping from "./component/Cart/Shipping.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import axios from "axios";
import Payment from "./component/Cart/Payment.js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess.js";
import MyOrders from "./component/Order/MyOrders.js";
import OrderDetails from "./component/Order/OrderDetails.js";
import Dashboard from "./component/Admin/Dashboard.js";
import ProductList from "./component/Admin/ProductList.js";
import NewProduct from "./component/Admin/NewProduct.js";
import UpdateProduct from "./component/Admin/UpdateProduct.js";
import OrderList from "./component/Admin/OrderList.js";
import ProcessOrder from "./component/Admin/ProcessOrder.js";
import UsersList from "./component/Admin/UsersList.js";
import UpdateUser from "./component/Admin/UpdateUser.js";
import ProductReviews from "./component/Admin/ProductReviews.js";
import About from "./component/layout/About/About.js";
import Contact from "./component/layout/Contact/Contact.js";
import NotFound from "./component/layout/Not Found/NotFound.js";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");
  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
  }

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);

  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route
          path="/account"
          element={isAuthenticated ? <Profile /> : <LoginSignup />}
        />
        <Route
          path="/me/update"
          element={isAuthenticated ? <UpdateProfile /> : <LoginSignup />}
        />
        <Route
          path="/password/update"
          element={isAuthenticated ? <UpdatePassword /> : <LoginSignup />}
        />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/wishlist"
          element={isAuthenticated ? <Wishlist /> : <LoginSignup />}
        />
        <Route
          path="/shipping"
          element={isAuthenticated ? <Shipping /> : <LoginSignup />}
        />
        <Route
          path="/order/confirm"
          element={isAuthenticated ? <ConfirmOrder /> : <LoginSignup />}
        />
        <Route
          path="/process/payment"
          element={
            isAuthenticated ? (
              <Elements stripe={loadStripe(stripeApiKey)}>
                <Payment />
              </Elements>
            ) : (
              <LoginSignup />
            )
          }
        />
        {/* {stripeApiKey && (
          <Elements stripe={loadStripe(stripeApiKey)}>
            <Route
              path="/process/payment"
              element={isAuthenticated ? <Payment /> : <LoginSignup />}
            />
          </Elements>
        )} */}
        <Route
          path="/success"
          element={isAuthenticated ? <OrderSuccess /> : <LoginSignup />}
        />
        <Route
          path="/orders"
          element={isAuthenticated ? <MyOrders /> : <LoginSignup />}
        />
        <Route
          path="/order/:id"
          element={isAuthenticated ? <OrderDetails /> : <LoginSignup />}
        />
        <Route
          path="/admin/dashboard"
          element={
            isAuthenticated && user.role === "admin" ? (
              <Dashboard />
            ) : (
              <LoginSignup />
            )
          }
        />
        <Route
          path="/admin/products"
          element={
            isAuthenticated && user.role === "admin" ? (
              <ProductList />
            ) : (
              <LoginSignup />
            )
          }
        />
        <Route
          path="/admin/product"
          element={
            isAuthenticated && user.role === "admin" ? (
              <NewProduct />
            ) : (
              <LoginSignup />
            )
          }
        />
        <Route
          path="/admin/product/:id"
          element={
            isAuthenticated && user.role === "admin" ? (
              <UpdateProduct />
            ) : (
              <LoginSignup />
            )
          }
        />
        <Route
          path="/admin/orders"
          element={
            isAuthenticated && user.role === "admin" ? (
              <OrderList />
            ) : (
              <LoginSignup />
            )
          }
        />
        <Route
          path="/admin/order/:id"
          element={
            isAuthenticated && user.role === "admin" ? (
              <ProcessOrder />
            ) : (
              <LoginSignup />
            )
          }
        />
        <Route
          path="/admin/users"
          element={
            isAuthenticated && user.role === "admin" ? (
              <UsersList />
            ) : (
              <LoginSignup />
            )
          }
        />
        <Route
          path="/admin/user/:id"
          element={
            isAuthenticated && user.role === "admin" ? (
              <UpdateUser />
            ) : (
              <LoginSignup />
            )
          }
        />
        <Route
          path="/admin/reviews"
          element={
            isAuthenticated && user.role === "admin" ? (
              <ProductReviews />
            ) : (
              <LoginSignup />
            )
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
