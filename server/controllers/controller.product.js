const db=require('../models/model.index')
module.exports.createProduct=async(req,res)=>{
  try {
        const one=await db.Product.create(req.body)
   res.json(one)
  } catch (error) {
    throw error
  }

}
module.exports.getAllProduct=async(req,res)=>{
    try {
          const one=await db.Product.find({})
     res.json(one)
    } catch (error) {
      throw error
    }
  
  }
  module.exports.updateProduct=async(req,res)=>{
    try {
          const one=await db.Product.findOneAndUpdate({name:req.params.name},req.body)
     res.json(one)
    } catch (error) {
      throw error
    }
  
  }
  module.exports.deleteProduct=async(req,res)=>{
    try {
          const one=await db.Product.findOneAndDelete({name:req.params.name},req.body)
     res.json(one)
    } catch (error) {
      throw error
    }
  
  }