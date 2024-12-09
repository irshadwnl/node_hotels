const express = require('express')
const app = express()
const db = require('./db');
const MenuItem = require('./models/MenuItem')
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Welcome to Taj Hotel')
})

const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);

const menuItemRoutes=require('./routes/menuRoutes');
app.use('/menuitem',menuItemRoutes)

app.listen(3000)