const Wishlist = require("../models/wishlistModel");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorhandler");

// Add to wishlist
exports.createwishlist = catchAsyncErrors(async (req, res, next) => {
  const { user, orderItems } = req.body;
  const Finduser = await Wishlist.find({ user: user });
  if (Finduser.length !== 0) {
    const product = await Wishlist.find({ user: user });
    function f(data) {
      return data.product == orderItems[0].product;
    }
    if (product[0].orderItems.filter(f).length > 0) {
      return next(new ErrorHandler("Product all ready added in Wishlist", 404));
    } else {
      await Wishlist.updateOne(
        { user: user },
        {
          $push: {
            orderItems: [orderItems[0]],
          },
        }
      );
    }
  } else {
    const wishlist = await Wishlist.create(req.body);
  }

  res.status(200).json({
    success: true,
  });
});

// Remove wishlistData
exports.deletewish = catchAsyncErrors(async (req, res, next) => {
  const { user, product } = req.body;

  const users = await Wishlist.updateOne(
    { user: user },
    {
      $pull: {
        orderItems: { product: product },
      },
    }
  );

  res.status(200).json({
    success: true,
  });
});

// Get Wishlist Data
exports.getwishlist = catchAsyncErrors(async (req, res, next) => {
  const wishlist = await Wishlist.findOne({ user: req.params.id }).populate(
    "orderItems.product"
  );

  res.status(200).json({
    success: true,
    wishlist,
  });
});
