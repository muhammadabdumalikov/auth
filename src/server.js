const express = require("express");
const cors = require("cors");
const path = require('path')
const fs = require('fs');
const psql = require('./modules/postgres')()

const app = express();

app.use(async(req, res, next)=> {
  req.psql = await psql
  next()
})

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors());

fs.readdir(path.join(__dirname, "routes"), (err, files) => {
  files.forEach(file => {
    const route = require(path.join(__dirname, "routes", file))
    if(route.path && route.router) app.use(route.path, route.router)
  })
})

app.listen(3300, () => console.log("Server ready"));

