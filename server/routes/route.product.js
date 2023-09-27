var express = require('express');
var router = express.Router();
const {createProduct,getAllProduct,updateProduct,deleteProduct}=require('../controllers/controller.product')
router.post('/createProduct',createProduct)
router.get('/getAllProducts',getAllProduct)
router.put('/updateProduct/:name',updateProduct)  
router.delete('/deleteProduct/:name',deleteProduct)
module.exports = router;