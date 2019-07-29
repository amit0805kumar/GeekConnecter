const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  //Get the token from header
  const token = req.header('x-auth-token');

  //check if no token

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied.' });
  }
  //verify the token
  try {
    const decoded = jwt.verify(token, config.get('jwtsecret'));
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};
