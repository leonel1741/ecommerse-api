const { DataTypes } = require("sequelize");
const db = require("../utils/database");

/**
 * @openapi
 * components:
 *   schemas:
 *     ProductInCart:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         cart_id: 
 *           type: string
 *           example: 4
 *         product_id:
 *           type: integer
 *           example: 4
 *         quantity:
 *           type: integer
 *           example: 2
 *         price:
 *           type: integer
 *           example: 8000
 *         status:
 *           type: string
 *           example: pending
 *     addProductCart:
 *       type: object
 *       properties:
 *         product_id:
 *           type: integer
 *           example: 4
 *         quantity:
 *           type: integer
 *           example: 2
 *         price:
 *           type: integer
 *           example: 8000
 *         status:
 *           type: string
 *           example: pending
 */

const ProductsInCart = db.define("productsInCart", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    cartId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "cart_id",
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "product_id",
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = ProductsInCart;