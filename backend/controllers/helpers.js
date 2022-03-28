const error500 = (res, err) => {
  res.status(500).json({
    success: false,
    message: `Server Error`,
    err: err.message,
  });
};

const resObjectSuccess =
  (res, statusCode = 200, objectType = "any") =>
  (data) => {
    if (data == null) {
      return res.status(404).json({
        success: false,
        statusCode: 404,
        isArray: false,
        objectType,
        data,
      });
    }
    res.status(statusCode).json({
      success: true,
      statusCode,
      isArray: false,
      objectType,
      data,
    });
  };


  
const resAdmin = (res, statusCode = 200, objectType = "any") => {
  res.status(statusCode).json({
    sucess: true,
    objectType,
  });
};

module.exports = {
  error500,
  resObjectSuccess,
  resAdmin,
};
