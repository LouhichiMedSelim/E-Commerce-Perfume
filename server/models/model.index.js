const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Perfume')
.then(()=>{console.log('succes')})
.catch((err)=>console.log((err)))
}

const {AdminSchema}=require('./model.admin')
var Admin = mongoose.model('Admin', AdminSchema);

const {ProductSchema}=require('./model.product')
var Product = mongoose.model('Product', ProductSchema);

const {userSchema}=require('./model.user')
var User = mongoose.model('User', userSchema);


var db={Admin,Product,User}
module.exports=db