// i will create here a simple template for the next person
import { HttpStatus } from '../../src/utils/helpers/dialogInvoke';
import users from '../models/student.model.mjs';


const httpStatusHandler = new HttpStatus();

/**
 * createUser() => POST :: /users
 * @description Creates a new User in the database.
 * @param {*} req 
 * @param {*} res 
 */
const createUser = async (req, res) => {
    // TODO: Edit Logic to Create a User
    const { firstName, lastName, email, password } = req.body;

    try {
        const newUser = new users({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        });

        res.json({ message: 'New User created successfully', newUser });
    } catch(err) {
        httpStatusHandler.showMessage(
            httpStatusHandler.getStatusType(err.statusCode),
            err.statusCode,
            err.message
        );
        res.status(500).json({ error: 'Internal server error' });
    }
};

/**
 * listAllUsers() => GET :: /users
 * @description Lists all the users in the database.
 * @param {*} req
 * @param {*} res 
 */
const listAllUsers = async (req, res) => {
    // TODO: Edit Logic to List all Users
    try {
        const userList = await users.find({});

        res.json(userList);
    } catch (err) {
        httpStatusHandler.showMessage(
            httpStatusHandler.getStatusType(err.statusCode),
            err.statusCode,
            err.message
        );
        res.status(500).json({ error: 'Internal server error' });
    }
};

/**
 * fetchUser() => GET :: /users/:id
 * @description Fetches a specific user by ID from the database
 * @param {*} req 
 * @param {*} res 
 */
const fetchUser = async (req, res) => {
    // TODO: Edit Logic to Fetch a User
    const { id } = req.params;

    try {
        const user = await users.findById(id);

        res.json(user);
    } catch (err) {
        httpStatusHandler.showMessage(
            httpStatusHandler.getStatusType(err.statusCode),
            err.statusCode,
            err.message
        );
        res.status(500).json({ error: 'Internal server error' });
    }
};

/**
 * updateUser() => PUT :: /users/:id
 * @description Updates a specific user by ID in the database.
 * @param {*} req 
 * @param {*} res 
 */
const updateUser = async (req, res) => {
    // TODO : Edit Logic to Update a User
    const { firstName, lastName, email, password } = req.body;
    const { id } = req.params;

    try {
        const user = await users.findByIdAndUpdate(id, {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        });

        res.json({ message: 'User updated successfully', user });
    } catch(err) {
        httpStatusHandler.showMessage(
            httpStatusHandler.getStatusType(err.statusCode),
            err.statusCode,
            err.message
        );
        res.status(500).json({ error: 'Internal server error' });
    }
};

/**
 * deleteUser() => DELETE :: /users/:id
 * @description Deletes a specific user by ID in the database.
 * @param {*} req 
 * @param {*} res 
 */
const deleteUser = async (req, res) => {
    // TODO: Edit Logic to Delete a User
    const { id } = req.params;

    try {
        const user = await users.findByIdAndDelete(id);

        res.json({ message: 'User deleted successfully', user });
    } catch (err) {
        httpStatusHandler.showMessage(
            httpStatusHandler.getStatusType(err.statusCode),
            err.statusCode,
            err.message
        );
        res.status(500).json({ error: 'Internal server error' });
    }
};

export { createUser, listAllUsers, fetchUser, updateUser, deleteUser };