const ErrorHandler = require("../utils/errorhandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.messsage || "Internal Server Error";

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
    //error: err.stack,-->it give complete location detail of error
  });
};
