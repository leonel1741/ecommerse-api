const { Carts, Users } = require("../models");

class CartServices {
    static async add(newCart, id) {
        try {
            await Carts.create({
                userId: id,
                totalPrice: newCart.totalPrice,
            });
            const newCartForUser = await Users.findByPk(id, {
                attributes: ["id", "username", "email"],
                include: {
                    attributes: ["id", "totalPrice"],
                    model: Carts,
                    as: "cart",
                }
            });
            return newCartForUser;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = CartServices;