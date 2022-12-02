const { UserServices } = require("../services");
const transporter = require("../utils/mailer");

const createUser = async (req, res, next) => {
    try {
        const newUser = req.body;
        const result = await UserServices.add(newUser);
        res.status(201).json(result);
        await transporter.sendMail({
            from: "<leonelcondori98@gmail.com",
            to: result.email,
            subject: "Usted se registro exitoso",
            text: `Hola ${result.username} bienvenido a mi E-commerse, gracias por registrarte.`,
            html: `<h2>Hola ${result.username}</h2> <p>Bienvenido a mi E-commerse, gracias por registrarte.</p>`
        });
    } catch (error) {
        next(error);
    }
};

const getAllProductsInCartByUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await UserServices.getProductsInCart(id);
        res.json(result);
    } catch (error) {
        next(error);
    }
}

const getAllOrdersByUser = async (req, res, next) => {
    try {
        const {id} = req.params;
        const result = await UserServices.getOrders(id);
        res.json(result);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createUser,
    getAllProductsInCartByUser,
    getAllOrdersByUser,
}