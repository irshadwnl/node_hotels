const express = require('express')
const app = express()
const db = require('./db');
require('dotenv').config();
const MenuItem = require('./models/MenuItem')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const PORT=process.env.PORT || 3000;
app.get('/', function (req, res) {
  res.send('Welcome to Taj Hotel')
})

const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);

const menuItemRoutes=require('./routes/menuRoutes');
app.use('/menuitem',menuItemRoutes)

app.listen(PORT,()=>{
  console.log("Listening on PORT 3000");
})