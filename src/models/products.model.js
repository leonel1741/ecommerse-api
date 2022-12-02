const { DataTypes } = require("sequelize");
const db = require("../utils/database");

/**
 * @openapi
 * components:
 *   schemas:
 *     Products:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: Iphone
 *         price:
 *           type: double
 *           example: 1000.0
 *         availableQty:
 *           type: integer
 *           example: 1
 *         status:
 *           type: string
 *           example: for sale
 *         userId: 
 *           type: integer
 *           example: 1
 *         image: 
 *           type: string
 *           example: https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204
 *     newproduct:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Iphone
 *         price:
 *           type: double
 *           example: 1000.0
 *         availableQty:
 *           type: integer
 *           example: 1
 *         status:
 *           type: string
 *           example: for sale
 *         userId: 
 *           type: integer
 *           example: 1
 *         image: 
 *           type: string
 *           example: https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204
 */

const Products = db.define("products", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.DOUBLE,
    },
    availableQty: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id",
    },
});

module.exports = Products;