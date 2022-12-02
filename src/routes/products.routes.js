const { Router } = require("express");
const { getProductsByQuantity, createProductWithImage } = require("../controllers");

const router = Router();

router.get("/products", getProductsByQuantity);
router.post("/products", createProductWithImage);

module.exports = router;