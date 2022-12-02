const db = require("../utils/database");
const initModels = require("../models/initModels");

const {
    Users,
    Carts,
    Orders,
    Products,
    ProductsInCart,
    ProductsInOrder
} = require("../models");

initModels();

const users = [
    {
        username: "Ian Rosas",
        email: "ian@gmail.com",
        password: "1234",
    },
    {
        username: "Alvis Echeverria",
        email: "alvis@gmail.com",
        password: "9876",
    },
    {
        username: "Carlos Tineo",
        email: "carlos@gmail.com",
        password: "4567",
    },
];

const carts = [
    {
        userId: 1,
        totalPrice: 10.0,
    },
    {
        userId: 2,
        totalPrice: 100.0,
    },
    {
        userId: 3,
        totalPrice: 1000.0,
    },
];

const products = [
    {
        name: "Mouse",
        price: 300.0,
        availableQty: 10,
        status: "pending",
        userId: 1,
    },
    {
        name: "Keyboard",
        price: 300.0,
        availableQty: 5,
        status: "pending",
        userId: 2,
    },
    {
        name: "Iphone 14",
        price: 1200.0,
        availableQty: 15,
        status: "pending",
        userId: 3,
    },
];

const orders = [
    {
        totalPrice: 356.0,
        userId: 1,
        status: "pending",
    },
    {
        totalPrice: 450.0,
        userId: 2,
        status: "pending",
    },
    {
        totalPrice: 1200.0,
        userId: 3,
        status: "pending",
    },
];

const productsInCart = [
    {
        cartId: 1,
        productId: 1,
        quantity: 5,
        price: 200,
        status: "pending",
    },
    {
        cartId: 2,
        productId: 2,
        quantity: 10,
        price: 2005,
        status: "pending",
    },
    {
        cartId: 3,
        productId: 3,
        quantity: 20,
        price: 2000,
        status: "pending",
    },
];

const productsInOrder = [
    {
        orderId: 1,
        productId: 1,
        quantity: 4,
        price: 500,
        status: "pending",
    },
    {
        orderId: 2,
        productId: 2,
        quantity: 8,
        price: 5000,
        status: "pending",
    },
    {
        orderId: 3,
        productId: 3,
        quantity: 10,
        price: 2000,
        status: "pending",
    },
];

db.sync({ force: true }).then(() => {
    console.log("Iniciando plantacion");

    users.forEach(user => Users.create(user));

    setTimeout(() => {
        products.forEach(product => Products.create(product));
    }, 100);

    setTimeout(() => {
        carts.forEach(cart => Carts.create(cart));
    }, 200);

    setTimeout(() => {
        orders.forEach(order => Orders.create(order));
    }, 300);

    setTimeout(() => {
        productsInCart.forEach(productInCart => ProductsInCart.create(productInCart));
    }, 400);

    setTimeout(() => {
        productsInOrder.forEach(productInOrder => ProductsInOrder.create(productInOrder));
    }, 500);
});