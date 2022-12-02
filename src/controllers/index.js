const { createUser, getAllProductsInCartByUser, getAllOrdersByUser } = require("./users.controllers");
const { userLogin } = require("./auth.controllers");
const { getProductsByQuantity, createProductWithImage } = require("./products.controllers");
const { addProductInCart, purchaseProductsInCart } = require("./productsInCart.controllers");
const { createCartByUser } = require("./cart.controllers");

module.exports = {
    createUser,
    userLogin,
    getProductsByQuantity,
    createProductWithImage,
    addProductInCart,
    getAllProductsInCartByUser,
    getAllOrdersByUser,
    purchaseProductsInCart,
    createCartByUser,
};