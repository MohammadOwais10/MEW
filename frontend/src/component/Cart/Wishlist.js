import React, { Fragment, useState, useEffect } from "react";
import "./Wishlist.css";
import { useSelector, useDispatch } from "react-redux";
import { deletewish, getwishlist } from "../../actions/wishlistAction";
import { loadUser, clearErrors } from "../../actions/userAction";
import { useAlert } from "react-alert";
import { Link, useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Typography } from "@material-ui/core";

function Wishlist() {
  const Alert = useAlert();
  const redirect = useNavigate();
  const dispatch = useDispatch();
  const { wishlist, loading } = useSelector((state) => state.wishlist_data);
  const {
    isAuthenticated,
    loading: userloading,
    error,
    user,
  } = useSelector((state) => state.user);
  const [state, setstate] = useState(false);
  const [state1, setstate1] = useState(false);
  const [state2, setstate2] = useState(false);
  const { deletewish: dellll } = useSelector((state) => state.deletewish);

  function delwish(user, product) {
    const option = {
      product: product,
      user: user,
    };

    dispatch(deletewish(option));
    setstate2(false);
  }
  if (state2 === false && dellll === true) {
    dispatch(getwishlist(user._id));
    setstate2(true);
  }

  useEffect(() => {
    if (state1 === false) {
      if (!user) {
        dispatch(loadUser());
      }
      setstate1(true);
    }

    if (error) {
      dispatch(clearErrors());
    }
    if (state === false) {
      if (userloading === false) {
        if (isAuthenticated === false) {
          Alert.info("Log in to access wishlist");
          setstate(true);
        } else {
          dispatch(getwishlist(user._id));
          setstate(true);
        }
      }
    }
  }, [dispatch, error, userloading, isAuthenticated, user]);

  return (
    <Fragment>
      {loading === false && (
        <Fragment>
          {wishlist !== null && wishlist.orderItems.length > 0 ? (
            <Fragment>
              <div className="whishlistPage">
                <div className="wishlistTitle">
                  <h1>
                    <FavoriteIcon sx={{ color: "red", fontSize: "35px" }} />
                    Wishlist Bucket: {wishlist.orderItems.length}
                  </h1>
                </div>
                <div className="whishlistHeader">
                  <p>Product</p>
                  <p>Name</p>
                  <p>Price</p>
                  <p>Delete</p>
                </div>

                {wishlist &&
                  wishlist.orderItems.map((pro) => (
                    <div className="whishlistContainer" key={pro.product}>
                      <div className="whishlistItemCard">
                        <img src={pro.product.images[0].url} alt="Product" />

                        <div>
                          <Link to={`/product/${pro.product._id}`}>
                            {pro.product.name}
                          </Link>
                        </div>

                        <div>
                          <span>
                            Price:
                            <b>{` ${pro.product.price}`}</b>
                          </span>
                        </div>

                        <div>
                          <button
                            onClick={() => delwish(user._id, pro.product._id)}
                          >
                            Remove from Wishlist
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                <div className="wishlistAddMore">
                  <Link to="/products">Add More Product </Link>
                </div>
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <div className="wishlistEmpty">
                <Typography>Your Wishlist is Empty</Typography>
                <FavoriteBorderIcon />
                <Typography>
                  Add items that you like to your wishlist
                </Typography>
                <Link to="/products">Continue Shopping</Link>
              </div>
            </Fragment>
          )}
        </Fragment>
      )}
    </Fragment>
  );
}

export default Wishlist;
