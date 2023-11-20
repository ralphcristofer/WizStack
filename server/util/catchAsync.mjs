/**
 * Returns a function that will catch any errors thrown by the given function
 * @param {Function} fn
 * @returns {Function}
 */
export default (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => next(err));
  };
};
