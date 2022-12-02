const { Router } = require("express");
const { addProductInCart, purchaseProductsInCart } = require("../controllers");

const router = Router();

router.post("/cart/:id", addProductInCart);
router.put("/cart/:id", purchaseProductsInCart);

module.exports = router;