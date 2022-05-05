import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import Product from "./ProductCard.js";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import Carousel from "react-material-ui-carousel";
import ban1 from "../../images/ban1.jpg";
import ban2 from "../../images/ban2.webp";
import ban4 from "../../images/ban4.jpg";
import ban8 from "../../images/ban8.jpg";
import ban10 from "../../images/ban10.jpg";

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
              <img src={ban10} className="banImg" />
              <img src={ban2} className="banImg" />
              <img src={ban8} className="banImg" />
              <img src={ban1} className="banImg" />
              <img src={ban4} className="banImg" />
            </Carousel>
            <a href="#container">
              <button>
                View Collections <CgMouse />
              </button>
            </a>
          </div>
          <h2 className="homeHeading" id="container">
            Featured Products
          </h2>
          <div className="container">
            {products &&
              products.map((product) => <Product product={product} />)}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
