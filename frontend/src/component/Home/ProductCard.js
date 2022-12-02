import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <span>{`\u20B9${product.price}`}</span>
      <div>
        <Rating id="rating" {...options} />{" "}
      </div>
    </Link>
  );
};

export default ProductCard;
