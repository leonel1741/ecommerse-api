const { Router } = require("express");
const { createUser, getAllProductsInCartByUser, getAllOrdersByUser } = require("../controllers");

const router = Router();

router.post("/users", createUser);
router.get("/users/:id", getAllProductsInCartByUser);
router.get("/users/orders/:id", getAllOrdersByUser);

module.exports = router;