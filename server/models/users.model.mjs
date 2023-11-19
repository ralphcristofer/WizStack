import mongoose from "mongoose";

//import validator package
import validator from "validator";

//import bcrypt package
import bcrypt from "bcryptjs";

/**
 * User Schema
 * @description Blueprint for user model.
 * @memberof module:db/models/users
 */

const usersSchema = new mongoose.Schema({
  // create a 'role' property to replace is_admin
  //is_admin: { type: Boolean, default: false },
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
  //add 'unique' and 'validate' properties
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
      return this.email; // TODO: If this does not work, please set default on the controller - create user.
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
    select: false, // make password not visible when listening all users
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
  program: { type: mongoose.Schema.Types.ObjectId, ref: "programs" },
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "courses" }],
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});

//  Create a 'pre' hook before save the new document into the collection
usersSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  //save the current password into a hashed version
  this.password = await bcrypt.hash(this.password, 12);

  //delete the passwordConfirm
  this.passwordConfirm = undefined;

  next();
});

// '.methods' is used to create a function that cna be implemented in all documents in a specific collection
usersSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const users = mongoose.model("users", usersSchema);

export default users;
