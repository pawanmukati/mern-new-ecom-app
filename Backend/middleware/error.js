const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // Wrong MongoDB ID error
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // MongoDB Duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 400);
  }

  // wrong json token error
  if (err.name === "JsonWebTokenError") {
    const message = `Json Web Token is invalid, Try again`;
    err = new ErrorHandler(message, 400);
  }
  // wrong expire token error
  if (err.name === "TokenExpireError") {
    const message = `Json Web Token is Expire, Try again`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
    // error: err, // normal error
    error: err.stack, // for detailed error
  });
};
