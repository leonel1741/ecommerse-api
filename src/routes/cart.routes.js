const { Router } = require("express");
const { createCartByUser } = require("../controllers");

const router = Router();

router.post("/user/cart/:id", createCartByUser);
// router.post("/user/cart/:id", () => console.log("zzz"));

module.exports = router;
