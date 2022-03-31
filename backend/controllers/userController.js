const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("../middleware/catchAsyncError");

//Register a User
exports.registerUser = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "this is a sample id",
      url: "profilepicUrl",
    },
  });

  const token = user.getJWTToken();

  res.status(201).json({
    success: true,
    token,
  });
});
