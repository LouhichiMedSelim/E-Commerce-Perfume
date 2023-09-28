const db = require('../models/model.index')
module.exports.createUser = async (req, res) => {
  try {
    const one = await db.User.create(req.body)
    res.json(one)
  } catch (error) {
    throw error
  }

}
module.exports.getAllUser = async (req, res) => {
  try {
    const one = await db.User.find({})
    res.json(one)
  } catch (error) {
    throw error
  }

}
module.exports.updateUser = async (req, res) => {
  try {
    const one = await db.User.findOneAndUpdate({ id: req.params.id }, req.body)
    res.json(one)
  } catch (error) {
    throw error
  }

}
module.exports.deleteUser = async (req, res) => {
  try {
    const one = await db.User.findOneAndDelete({ id: req.params.id }, req.body)
    res.json(one)
  } catch (error) {
    throw error
  }

}