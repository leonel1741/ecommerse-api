const {
    Users,
    Products,
    Carts,
    Orders,
    ProductsInCart,
    ProductsInOrder,
} = require("./index");


const initModels = () => {

    Carts.belongsTo(Users, {as: "user", foreignKey: "user_id"});
    Users.hasOne(Carts, {as: "cart", foreignKey: "user_id"});

    Products.belongsTo(Users, {as: "user", foreignKey: "user_id"});
    Users.hasMany(Products, {as: "products", foreignKey: "user_id"});

    Orders.belongsTo(Users, {as: "user", foreignKey: "user_id"});
    Users.hasMany(Orders, {as: "orders", foreignKey: "user_id"});

    ProductsInCart.belongsTo(Carts, {as: "cart", foreignKey: "cart_id"});
    Carts.hasMany(ProductsInCart, {as: "products", foreignKey: "cart_id"});

    ProductsInCart.belongsTo(Products, {as: "product", foreignKey: "product_id"});
    Products.hasOne(ProductsInCart, {as: "product_in_cart", foreignKey: "product_id"});

    ProductsInOrder.belongsTo(Orders, {as: "order", foreignKey: "order_id"});
    Orders.hasMany(ProductsInOrder, {as: "products_id_order", foreignKey: "order_id"})
    ProductsInOrder;

    ProductsInOrder.belongsTo(Products, {as: "product", foreignKey: "product_id"});
    Products.hasOne(ProductsInOrder, {as: "order", foreignKey: "product_id"});
};

module.exports = initModels;