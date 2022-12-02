const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Orders = db.define("orders", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    totalPrice: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id",
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Orders;