module.exports = (theCAE) => (req, res, next) => {
  Promise.resolve(theCAE(req, res, next)).catch(next);
};
