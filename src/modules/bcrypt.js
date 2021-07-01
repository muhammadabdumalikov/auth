const bcrypt = require('bcrypt')

module.exports.generateHash = async function generateHash(word) {
    let salt = await bcrypt.genSalt(10)
    console.log(word)
    return bcrypt.hash(word, salt)
}

module.exports.compare = async function compare(word, crypt){
    return bcrypt.compare(word, crypt)
}