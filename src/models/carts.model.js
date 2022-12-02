const { DataTypes } = require("sequelize");
const db = require("../utils/database");
const Users = require("./users.model");

/**
 * @openapi
 * components:
 *   schemas:
 *     Cart:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         username:
 *           type: string
 *           example: Ian Rosas
 *         email:
 *           type: string
 *           example: ian@gmail.com
 *         cart:
 *           type: object
 *     addCartToUser:
 *       type: object
 *       properties:
 *         totalPrice:
 *           type: double
 *           example: 4000.0
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JTW
 */

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