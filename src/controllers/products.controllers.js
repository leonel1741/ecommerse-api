const ProductsServices = require("../services/product.services");

const getProductsByQuantity = async(req, res, next) => {
    try {
        const result = await ProductsServices.getProducts();
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

const createProductWithImage = async(req, res, next) => {
    try {
        const newProduct = req.body;
        const result = await ProductsServices.add(newProduct);
        res.status(201).json(result);
    } catch (error) {
        next(error)
    }
} 
module.exports = {
    getProductsByQuantity,
    createProductWithImage,
}