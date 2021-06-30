const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", req, (res) => {});

app.listen(80, () => console.log("Server ready"));
