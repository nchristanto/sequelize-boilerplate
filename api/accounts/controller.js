const router = require('express').Router()
const models = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// get
exports.get = async (req, res) => {
  const accounts = await models.accounts.findAll()
  res.send(accounts)
}

// post
exports.post = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(7) //encrypt password

    req.body.password = bcrypt.hashSync(req.body.password, salt)

    const response = await models.accounts.create(req.body)
    res.send(response)
  } catch (err) {
    res.send(err)
  }
}

// delete 
exports.delete = async (req, res) => {
  try {
    const response = await models.accounts.findByPk(req.params.id)

    await response.destroy()
    res.send('Success')
  } catch (err) {
    res.send(err)
  }
}

// login
exports.login = async (req, res) => {
  const account = await models.accounts.findOne({ where: { email: req.body.email } })

  if (account === null) return res.send('Account Not Found')

  const validPassword = await bcrypt.compare(req.body.password, account.password)

  if(!validPassword) return res.send('Password is not Valid')

  const token = jwt.sign({id: account.id, email: account.email}, process.env.JWT_SECRET, { expiresIn: '7d' })


  res.send({
    message: 'Congrats you are logged in!',
    token: token
  })
}
