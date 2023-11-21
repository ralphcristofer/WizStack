import mongoose from "mongoose";

//import validator package
import validator from "validator";

//import bcrypt package
import bcrypt from "bcryptjs";

//import 'crypto' package
import crypto from "crypto";

/**
 * User Schema
 * @description Blueprint for user model.
 * @memberof module:db/models/users
 * @property {String} role - User role, either 'student' or 'administrator'
 * @property {String} first_name - User first name
 * @property {String} last_name - User last name
 * @property {String} email - User email address
 * @property {Object} address - User address
 * @property {String} user_name - User name
 * @property {String} password - User password
 * @property {String} passwordConfirm - User password confirmation
 */
const usersSchema = new mongoose.Schema({
  // Role is either 'student' or 'administrator'
  role: {
    type: String,
    enum: ["student", "administrator"],
    default: "student",
  },
  first_name: {
    type: String,
    trim: true,
    required: [true, "Please enter a first name"],
  },
  last_name: {
    type: String,
    trim: true,
    required: [true, "Please enter a last name"],
  },
  // Unique email address for each user
  email: {
    type: String,
    required: [true, "Please enter a student email"],
    unique: true,
    validate: [validator.isEmail, "Please enter a valid email!"],
  },
  address: {
    // modify 'street_number' property to 'String'
    street_number: { type: String, trim: true },
    street_name: { type: String, trim: true },
    city: { type: String, trim: true },
    province: { type: String, trim: true },
    postal_code: { type: String, trim: true },
  },
  user_name: {
    type: String,
    default: function () {
      return this.email;
    },
  },

  // delete property 'hashed_password'
  // add 'password' and 'passwordConfirmed' properties
  /* hashed_password: {
    type: String,
    required: [true, "Please enter a password."],
  }, */ // TODO: Expect hashed password from front-end.

  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: 8,
    select: false, // Hide password from being displayed in any output
  },

  passwordConfirm: {
    type: String,
    required: [true, "please confirm your password"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords Not Matched!",
    },
  },
  passwordChangedAt: Date, // used to store the time when the user modified password
  passwordResetToken: String, // store the token to reset the password
  passwordResetExpires: Date, // the expiration time of the reset token
  program: { type: mongoose.Schema.Types.ObjectId, ref: "programs" },
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "courses" }],
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});

/**
 * @function pre
 * @description A pre-hook before saving the new user document into the collection.
 */
usersSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  // Hash and salt the password
  this.password = await bcrypt.hash(this.password, 12);

  // Delete passwordConfirm field
  this.passwordConfirm = undefined;

  next();
});

/**
 * Create a function that can be implemented in all documents in a specific collection.
 * @param {*} candidatePassword
 * @param {*} userPassword
 * @returns
 */
usersSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

usersSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  // generate the crypto reset token
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // set the expiration time of the reset token
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const users = mongoose.model("users", usersSchema);

export default users;
