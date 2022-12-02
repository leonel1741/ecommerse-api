const { Router } = require("express");
const { createCartByUser } = require("../controllers");

const router = Router();

/**
 * @openapi
 * /api/v1/user/cart/{id}:
 *   post:
 *     summary: Add Cart to user into the app
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
 *       description: To register a new cart to user you need a totalPrice
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/addCartToUser"
 *     responses:
 *       200:
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
 *                     $ref: "#/components/schemas/Cart"
 */

router.post("/user/cart/:id", createCartByUser);

module.exports = router;
