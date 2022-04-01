//Make Common File For Token and Cookie

//Create a Token And Saving in Cookie

const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();

  //option for cookie
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpONLY: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;
