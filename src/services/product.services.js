const { Products, Users } = require("../models");
const { Op, DataTypes } = require("sequelize");

class ProductsServices {
    static async getProducts() {
        try {
            const result = await Products.findAll({
                attributes: ["name", "price", "availableQty", "status", "image"],
                where: {
                    availableQty: {
                        [Op.gt]: 0,
                    }
                },
                include: {
                    model: Users,
                    as: "user",
                    attributes: ["id", "username", "email"],
                }
            });
            return result;
        } catch (error) {
            throw error;
        }
    };

    static async add(newProduct) {
        try {
            const result = await Products.create(newProduct);
            return result;
        } catch (error) {
            throw error;
        }
    };
};

module.exports = ProductsServices;