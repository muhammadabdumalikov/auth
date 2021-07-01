const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })


const { env } = process;


module.exports = {
  url: process.env.URL
}