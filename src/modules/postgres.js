const { Sequelize, DataTypes } = require("sequelize");
const { url } = require("../config");
const UserModel = require("../models/UserModel");

const sequelize = new Sequelize(url, {
    logging: (e) => console.log(`SQL: `, e),
});

module.exports = postgres

async function postgres () {
    try {
        let db = {};
        db.users = UserModel(Sequelize, sequelize);
        sequelize.sync({ force: false });
        return db
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}
