import {
  REQUEST_CREATE_WISHLIST,
  SUCCESS_CREATE_WISHLIST,
  FAIL_CREATE_WISHLIST,
  REQUEST_GET_WISHLIST,
  SUCCESS_GET_WISHLIST,
  FAIL_GET_WISHLIST,
  SUCCESS_DELETE_WISH,
  REQUEST_DELETE_WISH,
  FAIL_DELETE_WISH,
  CLEAR_ERRORS,
} from "../constants/wishlistConstant";
import axios from "axios";

// Add to Wishlist
export const createwishlist = (option) => async (dispatch) => {
  try {
    dispatch({ type: REQUEST_CREATE_WISHLIST });
    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      "/api/v1/create_wishlist",
      option,
      config
    );

    dispatch({ type: SUCCESS_CREATE_WISHLIST, payload: data });
  } catch (error) {
    dispatch({
      type: FAIL_CREATE_WISHLIST,
      payload: error.response.data.message,
    });
  }
};

//Get Wishlist Data
export const getwishlist = (userid) => async (dispatch) => {
  try {
    dispatch({ type: REQUEST_GET_WISHLIST });
    const { data } = await axios.get(`/api/v1/get_wishlist/${userid}`);
    dispatch({ type: SUCCESS_GET_WISHLIST, payload: data.wishlist });
  } catch (error) {
    dispatch({ type: FAIL_GET_WISHLIST, payload: error.response.data.message });
  }
};

// Delete from Wishlist
export const deletewish = (fdata) => async (dispatch) => {
  try {
    dispatch({ type: SUCCESS_DELETE_WISH });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.put(`/api/v1/delete_wish`, fdata, config);
    dispatch({ type: REQUEST_DELETE_WISH, payload: data.success });
  } catch (error) {
    dispatch({ type: FAIL_DELETE_WISH, payload: error.response.data.message });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
