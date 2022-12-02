const express = require("express");
const {
  createwishlist,
  deletewish,
  getwishlist,
} = require("../controllers/wishlistController");

const { isAuthenticatedUser } = require("../middleware/auth");
const router = express.Router();

router.route("/create_wishlist").post(isAuthenticatedUser, createwishlist);

router.route("/delete_wish").put(isAuthenticatedUser, deletewish);

router.route("/get_wishlist/:id").get(isAuthenticatedUser, getwishlist);

module.exports = router;
