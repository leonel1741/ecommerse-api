const { Op } = require("sequelize");
const { ProductsInCart, Carts, Users } = require("../models");

class ProductsInCartServices {
    static async add(newProductInCart, id) {
        try {
            const result = await ProductsInCart.create({
                cartId: id,
                productId: newProductInCart.product_id,
                quantity: newProductInCart.quantity,
                price: newProductInCart.price,
                status: newProductInCart.status,
            });
            return result;
        } catch (error) {
            throw error;
        }
    };

    static async purchase(newstatus, id) {
        try {
            await ProductsInCart.update(
                {
                    status: newstatus,
                },
                {
                    where: {
                        cartId: id,
                    },
                }
            );
            const cartUpdated = await Carts.findByPk(id);
            const cartUpdatedOfUser = await Users.findByPk(cartUpdated.id,
                {
                    attributes: ["id", "username", "email"],
                    include: {
                        model: Carts,
                        as: "cart",
                        attributes: ["id"],
                        include: [
                            {
                                model: ProductsInCart,
                                as: "products",
                                attributes: ["id", "quantity", "status"],
                            }
                        ]
                    }
                }
            );
            return cartUpdatedOfUser;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ProductsInCartServices;