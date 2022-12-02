const { Users, Carts, ProductsInCart, Products, Orders } = require("../models");

class UserServices {
    static async add(newUser) {
        try {
            const result = await Users.create(newUser);
            return result;
        } catch (error) {
            throw error;
        }
    };

    static async getProductsInCart(id) {
        try {
            const result = await Users.findByPk(id, {
                attributes: ["id", "username", "email"],
                include: {
                    attributes: ["id"],
                    model: Carts,
                    as: "cart",
                    include: {
                        attributes: ["id"],
                        model: ProductsInCart,
                        as: "products",
                        include: {
                            attributes: ["id", "name", "price", "availableQty"],
                            model: Products,
                            as: "product",
                        }
                    }
                }
            });
            return result;
        } catch (error) {
            throw error;
        }
    };

    static async getOrders(id) {
        try {
            const result = await Users.findByPk(id, {
                attributes: ["id", "username", "email"],
                include: {
                    attributes: ["id", "totalPrice"],
                    model: Orders,
                    as: "orders",
                }
            });
            return result;
        } catch (error) {
            throw error;
        }

    };
};

module.exports = UserServices;