const jwt = require('jsonwebtoken')
const models = require('../models')

module.exports.isAuthenticated = async(req, res, next) => {
  // 1. Get token
  const token = 
    req.headers.authorization && req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.send('Token Not Found')
  }
  // 2. Verify token 
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const account = await models.accounts.findOne({ where: { id: decoded.id } })

    if (account === null) {
      return res.send('Account Not Found')
    }

    req.decoded = decoded

    } catch (err) {
      return res.send(err)
    }

  next();
};