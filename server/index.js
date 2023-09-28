
var admin = require('./routes/route.admin');
var product = require('./routes/route.product');
var user = require('./routes/route.user');

require('./models/model.index')
const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
app.use(express.static(__dirname + '/../client/dist'))
app.use('/api/admin/', admin);
app.use('/api/product/', product);
app.use('/api/user/', user)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
