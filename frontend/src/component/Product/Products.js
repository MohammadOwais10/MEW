import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import { useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import { useAlert } from "react-alert";
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import { Button } from "@material-ui/core";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const categories = [
  "Kurta",
  "Kurta Pajma",
  "Floral Kurta",
  "Sherwani",
  "Wedding",
  "Jacket ",
  "Indo Western",
];

const Products = () => {
  const { keyword } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 50000]);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);

  const {
    products,
    loading,
    productCount,
    resultPerPage,
    filterProductCount,
    error,
  } = useSelector((state) => state.products);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  let count = filterProductCount;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings, alert, error]);

  const resetFilters = () => {
    setCategory("");
    setRatings(0);
    setPrice([0, 50000]);
  };

  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <h2 className="productsHeading">Products</h2>

          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          <button
            className=" mobile-settingMenu"
            onClick={() => setShowMediaIcons(!showMediaIcons)}
          >
            {showMediaIcons ? (
              <SettingsInputComponentIcon />
            ) : (
              <SettingsApplicationsIcon />
            )}
          </button>

          <div
            className={showMediaIcons ? "mobile-filterBox" : "filterBox"}
            onClick={() => setShowMediaIcons(false)}
          >
            <Typography>Price</Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              marks
              step={5000}
              min={0}
              max={50000}
            />

            <Typography>Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>

            <fieldset>
              <Typography>Ratings</Typography>
              <Slider
                value={ratings}
                onChange={(e, newRating) => {
                  setRatings(newRating);
                }}
                aria-label="Small steps"
                valueLabelDisplay="auto"
                marks
                step={1}
                min={0}
                max={5}
              />
            </fieldset>

            <Typography>
              <Button onClick={resetFilters}>
                <RestartAltIcon />
                Reset
              </Button>
            </Typography>
          </div>

          {resultPerPage < count && (
            <div>
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
