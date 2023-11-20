/**
 * @class AppError
 * @extends {Error}
 * @description A custom error class that checks for the status code and status type.
 * @param {string} message
 * @param {number} statusCode
 * @returns {object} AppError
 */
class AppError extends Error {
  constructor(message, statusCode) {
    super(message), (this.statusCode = statusCode);
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";

    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
