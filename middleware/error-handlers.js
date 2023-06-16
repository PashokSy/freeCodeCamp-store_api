const errorHandlerMiddleware = async (err, req, res, next) => {
  console.log(err);
  return res
    .status(500)
    .json({ message: 'Unexpected error, please try again' });
};

module.export = errorHandlerMiddleware;
