const { DataTypes } = require("sequelize");
const db = require("../utils/database");
const Users = require("./users.model");

const Carts = db.define("carts", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Users,
            key: "id",
        },
        field: "user_id",
    },
    totalPrice: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
});

module.exports = Carts;