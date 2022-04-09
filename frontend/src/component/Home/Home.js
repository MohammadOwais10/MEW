import React, { Fragment } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import Product from "./Product.js";

const product = {
  name: "Tshirts",
  images: [
    {
      url: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRHUX5SQjPh6a-9FIyPQC2wveJrMJ54cPKITV-jRfVcVJ8sNg1hE_IV0w3GV_ZWSlsQ2lAhbqNFGerZafpSBtWZre_RYypHCE-dEYWqQ4fglT3anByPx-W9EA&usqp=CAE",
    },
  ],
  price: "3000",
  _id: "alis",
};

const Home = () => {
  return (
    <Fragment>
      <div className="banner">
        <p>Welcome to Ecommerce Master</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>

        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>
      <h2 className="homeHeading">Featured Products</h2>
      <div className="container" id="container">
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
      </div>
    </Fragment>
  );
};

export default Home;
