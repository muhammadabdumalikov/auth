const { Sequelize, DataTypes } = require("sequelize");
const { url } = require("../config");
const SessionModel = require("../models/SessionModel");
const UserModel = require("../models/UserModel");

const sequelize = new Sequelize(url, {
    logging: (e) => console.log(`SQL: `, e),
});

module.exports = postgres

async function postgres () {
    try {
        let db = {};
        db.users = await UserModel(Sequelize, sequelize);
        db.sessions = await SessionModel(Sequelize, sequelize)
        await db.users.hasMany(db.sessions, {
            foreignKey: {
                name: 'user_id',
                allowNull: false
            }
        })
        sequelize.sync({ force: false });
        return db
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}
