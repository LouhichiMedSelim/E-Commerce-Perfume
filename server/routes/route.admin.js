var express = require('express');
var router = express.Router();
const {create,getAll}=require('../controllers/controller.admin')
router.get('/getAdmin',getAll)
router.post('/createAdmin',create)

router.get('/', function(req, res) {
    res.send('hello world');
  });

  
module.exports = router;