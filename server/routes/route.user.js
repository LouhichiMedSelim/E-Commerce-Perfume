var express = require('express');
var router = express.Router();
const { createUser, getAllUser, updateUser, deleteUser } = require('../controllers/controller.user')
router.post('/createUser', createUser)
router.get('/getAllUsers', getAllUser)
router.put('/updateUser/:id', updateUser)
router.delete('/deleteUser/:id', deleteUser)
module.exports = router;