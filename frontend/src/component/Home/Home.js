import React, { Fragment, useEffect } from "react";
import "./Home.css";
import Product from "./ProductCard.js";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import Carousel from "react-material-ui-carousel";
import ban2 from "../../images/ban2.webp";
import ban8 from "../../images/ban8.jpg";
import ban10 from "../../images/ban10.jpg";
import { Link } from "react-router-dom";
import MoreProductBanner from "../../images/ethnic-mens (1).jpg";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="banner">
            <Carousel>
              <img src={ban10} className="banImg" alt="Carousel" />
              <img src={ban2} className="banImg" alt="Carousel " />
              <img src={ban8} className="banImg" alt="Carousel " />
            </Carousel>
            <a href="#container">
              <button>View Collections</button>
            </a>
          </div>
          <h2 className="homeHeading" id="container">
            Featured Products
          </h2>
          <div className="container">
            {products &&
              products.map((product) => <Product product={product} />)}

            <Link to="/Products">
              <button className="moreProductsBtn">
                <h1>Show More Product</h1>
                <img src={MoreProductBanner} alt="Banner More Product" />
              </button>
            </Link>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
