import httpError from "./errorHandler.js";

const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new httpError("access denied", 400));
    }
    next();
  };
};

export default authorize;
