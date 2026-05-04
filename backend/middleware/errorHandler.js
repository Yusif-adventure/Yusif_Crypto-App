export const notFound = (req, res, next) => {
  res.status(404);
  res.json({
    success: false,
    message: `Route not found: ${req.originalUrl}`,
  });
};

export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    success: false,
    message: err.message || "Internal server error",
  });
};
