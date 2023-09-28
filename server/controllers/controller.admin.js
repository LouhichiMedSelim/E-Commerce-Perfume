const db = require('../models/model.index')
module.exports.create = async (req, res) => {
  try {
    console.log(req.body);
    const one = await db.Admin.create(req.body)
    res.json(one)
  } catch (error) {
    throw error
  }

}
module.exports.getAll = async (req, res) => {
  try {
    const one = await db.Admin.find({})
    res.json(one)
  } catch (error) {
    throw error
  }

}