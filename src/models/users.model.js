const { DataTypes } = require("sequelize");
const db = require("../utils/database");
const bcrypt = require("bcrypt");

/**
 * @openapi
 * components:
 *   schemas:
 *     Users:
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
 *     register:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           example: Ian Rosas
 *         email:
 *           type: string
 *           example: ian@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JTW
 */

const Users = db.define(
    "users",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        hooks: {
            beforeCreate: (user, options) => {
                const {password} = user;
                const hash = bcrypt.hashSync(password, 8);
                user.password = hash;
            }
        }
    }
);

module.exports = Users;