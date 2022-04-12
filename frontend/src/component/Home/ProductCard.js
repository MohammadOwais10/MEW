import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const ProductCard = ({ product }) => {
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "gold",
    size: window.innerWidth < 600 ? 20 : 25,
    value: product.ratings,
    isHalf: true,
  };
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <span>{`\u20B9${product.price}`}</span>
      <div>
        <ReactStars {...options} />{" "}
        <span className="productCardSpan">
          ({product.numOfReviews} Reviews)
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
