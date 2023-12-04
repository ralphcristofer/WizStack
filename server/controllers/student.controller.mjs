import { HttpStatus } from "../util/dialogInvoke.mjs";
import users from "./../models/users.model.mjs";

const httpStatusHandler = new HttpStatus();

/**
 * createUser() => POST :: /users
 * @description Creates a new User in the database.
 * @param {*} req
 * @param {*} res
 */
const createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const newUser = new users({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });

    res.json({ message: "New User created successfully", newUser });
  } catch (err) {
    httpStatusHandler.showMessage(
      httpStatusHandler.getStatusType(err.statusCode),
      err.statusCode,
      err.message
    );
    res.status(500).json({ error: "Internal server error" });
  }
};

/**
 * listAllUsers() => GET :: /users
 * @description Lists all the users in the database.
 * @param {*} req
 * @param {*} res
 */
const listAllUsers = async (req, res) => {
  try {
    const userList = await users.find({});

    res.json(userList);
  } catch (err) {
    httpStatusHandler.showMessage(
      httpStatusHandler.getStatusType(err.statusCode),
      err.statusCode,
      err.message
    );
    res.status(500).json({ error: "Internal server error" });

  }
};

/**
 * fetchUser() => GET :: /users/:id
 * @description Fetches a specific user by ID from the database
 * @param {*} req
 * @param {*} res
 */
const fetchUser = async (req, res) => {
  try {
    const user = await users.findById(req.params.userId);

    res.status(200).json({
      status: "Successfully find the user",
      data: {
        user,
      },
    });
  } catch (err) {
    httpStatusHandler.showMessage(
      httpStatusHandler.getStatusType(err.statusCode),
      err.statusCode,
      err.message
    );

  }
};

/**
 * updateUser() => PUT :: /users/:id
 * @description Updates a specific user by ID in the database.
 * @param {*} req
 * @param {*} res
 */
const updateUser = async (req, res) => {
  try {
    const user = await users.findByIdAndUpdate(req.params.userId, req.body, {
      new: true,
      runValidators: true,
    });

    res.json({ message: "User updated successfully", data: user });
  } catch (err) {
    httpStatusHandler.showMessage(
      httpStatusHandler.getStatusType(err.statusCode),
      err.statusCode,
      err.message
    );
    res.status(500).json({ error: "Internal server error" });

  }
};

/**
 * deleteUser() => DELETE :: /users/:id
 * @description Deletes a specific user by ID in the database.
 * @param {*} req
 * @param {*} res
 */
const deleteUser = async (req, res) => {
  try {
    const user = await users.findByIdAndDelete(req.params.userId);

    res.json({ message: "User deleted successfully", user });
  } catch (err) {
    httpStatusHandler.showMessage(
      httpStatusHandler.getStatusType(err.statusCode),
      err.statusCode,
      err.message
    );
    res.status(500).json({ error: "Internal server error" });

  }
};

export { createUser, listAllUsers, fetchUser, updateUser, deleteUser };
