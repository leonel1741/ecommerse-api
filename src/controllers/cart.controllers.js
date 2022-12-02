const { CartServices } = require("../services");

const createCartByUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const newCart = req.body;
        const result = await CartServices.add(newCart, id);
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createCartByUser,
}