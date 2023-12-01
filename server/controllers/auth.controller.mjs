//import 'jsonwebtoken' package
import jwt from "jsonwebtoken";
import users from "./../models/users.model.mjs";
import AppError from "../util/AppError.mjs";
import catchAsync from "../util/catchAsync.mjs";
import { promisify } from "util";

/**
 * generateToken function is used to generate a token for the user.
 * @param {*} id The id of the user.
 * @returns A token for the user.
 */
const generateToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

/**
 * refreshToken function is used to refresh the token for the user.
 * @param {*} id The id of the user.
 * @returns A token for the user.
 */
const refreshToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN_FOR_REFRESH_TOKEN,
  });
}

/**
 * Sign up a new user.
 * @param {*} req The request object.
 * @param {*} res The response object.
 * @param {*} next The next middleware.
 */
const signUp = catchAsync(async (req, res, next) => {
  // Create a new user based on the request body
  const newUser = await users.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    address: {
      street_number: req.body.street_number,
      street_name: req.body.street_name,
      city: req.body.city,
      province: req.body.province,
      postal_code: req.body.postal_code,
    },
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    role: req.body.role,
  });
  /* 
    res.status(401).json({
      status: "Fail to sign up, please fill out all mandatory fields.",
      message: err,
    }); */

  //  After successful user creation, generate a token for the user
  const token = generateToken(newUser._id);
  res.status(200).json({
    status: "Success for Signing Up!",
    token,
    data: {
      user: newUser,
    },
  });
});

/**
 * Sign in a user with proper credentials.
 * @todo Complete sign-in logic.
 * @param {*} req
 * @param {*} res
 */
const signIn = catchAsync(async (req, res, next) => {
  //Retrieve email and password from the user
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError("Please provide email and password!"), 400);
  }

  const user = await users.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next((new AppError("Incorrect Email and Password!"), 401));
  }

  const token = generateToken(user._id);
  res.status(200).json({
    status: "Successfully Logged In!",
    token,
  });
});

/**
 * Protect function is used to protect the specific router can only be accessed by specific user.
 * @param {*} req The request object.
 * @param {*} res The response object.
 * @param {*} next The next middleware.
 */
const protect = catchAsync(async (req, res, next) => {
  // Getting the token to see if the user is there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  // If user without bearing a token to visit a route, his access will be denied.
  if (!token) {
    return next(new AppError("You are not logged in, Please log in again"));
  }

  // Verification Token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  console.log(decoded);

  // Check if user still exists
  // This situation may happen the user is deleted by the admin, while its token is still available
  const freshUser = await users.findById(decoded.id);
  if (!freshUser) {
    return next(
      new AppError("The user belonging to this token does not exist anymore")
    );
  }

  // Check if the user changes the password after JWT was issued

  //Assign the freshUser to the req.user for later use.
  req.user = freshUser;
  next();
});


/**
 * Restrict the user to access the route based on his role.
 * @param  {...any} roles Depending on the role, the user can access different routes.
 * @returns A middleware function
 */
const restrictTo = (...roles) => {
  return (req, res, next) => {
    //roles is an array: ["administrator", 'lead-guide']
    //In users.routes, only administrator can access listAllUsers
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You do not have permission to perform this action", 403)
      );
    }

    next();
  };
};

/**
 * If User forgot password, he can reset his password by using his email.
 * @param {*} req The request object.
 * @param {*} res The response object.
 * @param {*} next The next middleware.
 */
const forgotPassword = catchAsync(async (req, res, next) => {
  // Get user information based on email
  const user = await users.findOne({ email: req.body.email });
  if (!user) {
    return next(
      new AppError("We cannot match the account with your email", 404)
    );
  }

  // Generate random reset token
  const resetToken = user.createPasswordResetToken();

  // Properties of 'passwordResetToken' and 'passwordResetExpired' need to be saved to the datebase
  await user.save({ validateBeforeSave: false });

  res.status(200).json({
    status: "The reset token has been sent your registered email address",
    resetToken: resetToken,
  });
});

/**
 * Sign out a user.
 * @todo Complete sign-out logic.
 * @param {*} req The request object.
 * @param {*} res The response object.
 */
const signOut = catchAsync(async (req, res, next) => {
  const email = req.email;

  const currentUser = await users.findOne({ email });

  let token;

  if (currentUser) {
    token = jwt.sign(currentUser._id, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN_FOR_LOGOUT,
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      res.status(401).json({
        status: "Your token has expired, you have been logged out!",
      });
    }
  });
});

export { signUp, signIn, signOut, protect, restrictTo, forgotPassword };