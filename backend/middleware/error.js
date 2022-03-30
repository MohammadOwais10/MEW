const ErrorHandler = require("../utils/errorhandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  //Cast Error in MongoDB id error
  if (err.name === `CastError`) {
    const message = `Resource not found. Invalid:${err.path}`;
    err = new ErrorHandler(message, 400);
  }
  //end CastError code

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
    //error: err.stack,-->it give complete location detail of error
  });
};
