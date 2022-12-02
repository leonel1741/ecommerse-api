const { ProductsInCartServices } = require("../services");
const transporter = require("../utils/mailer");


const addProductInCart = async (req, res, next) => {
    try {
        const { id } = req.params;
        const newProductInCart = req.body;
        const result = await ProductsInCartServices.add(newProductInCart, id);
        res.json(result);
    } catch (error) {
        next(error);
    }
};

const purchaseProductsInCart = async (req, res, next) => {
    try {
        const newStatus = "purchased";
        const { id } = req.params;
        const result = await ProductsInCartServices.purchase(newStatus, Number(id));
        res.json(result);
        await transporter.sendMail({
            from: "<leonelcondori98@gmail.com",
            to: result.email,
            subject: "Compra Exitosa",
            text: `Hola ${result.username} tu Compra fue realizada exitosamente.`,
            html: `<h2>Hola ${result.username}</h2> <p>Tu Compra fue realizada exitosamente.</p>`
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    addProductInCart,
    purchaseProductsInCart,
};