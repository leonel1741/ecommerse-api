const { Router } = require("express");
const { addProductInCart, purchaseProductsInCart } = require("../controllers");

const router = Router();

/**
 * @openapi
 * /api/v1/cart/{id}:
 *   post:
 *     summary: Add a new product into the cart
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimun: 1
 *         description: cart Id
 *     requestBody:
 *       description: To register a new product in cart you need a product_id, quantity, price, status
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/addProductCart"
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/ProducInCart"
 *
 * /api/v1/cart/purchase/{id}:
 *   put:
 *     summary: Buy the products in the cart
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimun: 1
 *         description: cart Id
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 */

router.post("/cart/:id", addProductInCart);
router.put("/cart/purchase/:id", purchaseProductsInCart);

module.exports = router;