import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const options = {
  edit: false,
  color: "rgba(20,20,20,0.1)",
  activeColor: "gold",
  size: window.innerWidth < 600 ? 20 : 25,
  value: 3.5,
  isHalf: true,
};

const Product = ({ product }) => {
  return (
    <Link className="productCard" to={product._id}>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <span>Rs.{product.price}</span>
      <div>
        <ReactStars {...options} />{" "}
        <span className="productCardSpan">(256 Reviews)</span>
      </div>
    </Link>
  );
};

export default Product;
