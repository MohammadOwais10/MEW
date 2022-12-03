import React, { Fragment, useEffect } from "react";
import "./orderDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { getOrderDetails, clearErrors } from "../../actions/orderAction";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const OrderDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();
  const { order, error, loading } = useSelector((state) => state.orderDetails);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getOrderDetails(id));
  }, [dispatch, id, alert, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="orderDetailsPage">
            <div className="orderDetailsContainer">
              <Typography component="h1">
                Order Id: #{order && order._id}
              </Typography>

              <div className="orderDetailsContainerBox">
                <Typography>Shipping Info</Typography>
                <div>
                  <p>Name:</p>
                  <span>{order.user && order.user.name}</span>
                </div>
                <div>
                  <p>Phone:</p>
                  <span>
                    {order.shippingInfo && order.shippingInfo.phoneNo}
                  </span>
                </div>
                <div>
                  <p>Address:</p>
                  <span>
                    {order.shippingInfo &&
                      `${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.pincode}, ${order.shippingInfo.country}`}
                  </span>
                </div>
              </div>

              <div className="orderDetailsContainerBox">
                <Typography>Payment</Typography>
                <div>
                  <p>Status:</p>
                  <span
                    className={
                      order.paymentInfo &&
                      order.paymentInfo.status === "succeeded"
                        ? "greenColor"
                        : "redColor"
                    }
                  >
                    {order.paymentInfo &&
                    order.paymentInfo.status === "succeeded"
                      ? "PAID"
                      : "NOT PAID"}
                  </span>
                </div>

                <div>
                  <p>Amount:</p>
                  <span>
                    {order.totalPrice?.toFixed(2) &&
                      order.totalPrice?.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="orderDetailsContainerBox">
                <Typography>Order Status</Typography>
                <div>
                  <p>Status:</p>
                  <span
                    className={
                      order.orderStatus && order.orderStatus === "Delivered"
                        ? "greenColor"
                        : "redColor"
                    }
                  >
                    {order.orderStatus && order.orderStatus}
                  </span>
                </div>
              </div>
            </div>

            <div className="orderDetailsCartItems">
              <div className="orderDetailsCartItemsContainer">
                <Typography>Order Items</Typography>
                {order.orderItems &&
                  order.orderItems.map((item) => (
                    <div key={item.product}>
                      <img src={item.image} alt="Product" />
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                      <div className="sizeClass">
                        <span>
                          Size:
                          <b>{` ${item.size}`}</b>
                        </span>
                      </div>
                      <span>
                        {item.quantity} X ₹{item.price} ={" "}
                        <b>₹{item.price * item.quantity}</b>
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default OrderDetails;
