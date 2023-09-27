var express = require('express');
var router = express.Router();
const {createProduct,getAllProduct,updateProduct,deleteProduct,updateProductQantity}=require('../controllers/controller.product')
router.post('/createProduct',createProduct)
router.get('/getAllProducts',getAllProduct)
router.put('/updateProduct/:_id',updateProduct)  
router.put('/updateProductQuantity/:name',updateProductQantity) 
router.delete('/deleteProduct/:name',deleteProduct)
module.exports = router;