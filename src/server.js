const express = require("express");
const cors = require("cors");
const path = require('path')
const fs = require('fs')

const app = express();

app.use(cors());

app.listen(8000, () => console.log("Server ready"));

fs.readdir(path.join(__dirname, "routes"), (err, files) => {
  files.forEach(file => {
    const router = require(path.join(__dirname, "routes", file))
    if(router.path && router.route) app.use(router.path, router.route)
  })
})
