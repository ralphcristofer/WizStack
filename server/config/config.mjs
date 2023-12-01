import dotenv from "dotenv";
import process from "process";
import mongoose from "mongoose";
import { HttpStatus } from "../util/dialogInvoke.mjs";

const httpStatus = new HttpStatus();
dotenv.config({ path: "./config.env" });

/**
 * Connect to MongoDB Atlas database.
 * @returns {Promise<void>} Promise object represents the connection to the database.
 */
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_CONN, { });
    httpStatus.showMessage(
      httpStatus.getStatusType(200),
      200,
      "Connected to Database."
    );
  } catch (error) {
    httpStatus.showMessage(
      httpStatus.getStatusType(500),
      500,
      "Could not connect to Database."
    );
    process.exit(1);
  }
};

export default connectDb;
