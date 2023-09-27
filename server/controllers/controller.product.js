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
          const one=await db.Product.findOneAndUpdate({_id:req.params._id},req.body)
     res.json(one)
    } catch (error) {
      throw error
    }
  
  }
  module.exports.updateProductQantity=async(req,res)=>{
    try {

          const one=await db.Product.findOneAndUpdate({name:req.params.name})
          console.log(one.quantity)
          const upd=await db.Product.findOneAndUpdate({name:req.params.name},{quantity:one.quantity-1})
     res.json(upd)
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