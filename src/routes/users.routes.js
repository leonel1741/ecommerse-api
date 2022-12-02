const { Router } = require("express");
const { createUser, getAllProductsInCartByUser, getAllOrdersByUser } = require("../controllers");

const router = Router();

/**
 * @openapi
 * /api/v1/users:
 *   post:
 *     summary: Register a new user into the app
 *     tags: [Users]
 *     requestBody:
 *       description: To register a new user you need a username, email, password
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/register"
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
 *                     $ref: "#/components/schemas/Users"
 *
 * /api/v1/users/{id}:
 *   get:
 *     summary: Get all products in the user's cart
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimun: 1
 *         description: user Id
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: int
 *                   example: 1
 *                 username:
 *                   type: string
 *                   example: "Ian Rosas"
 *                 email:
 *                   type: string
 *                   example: "ian@gmail.com"
 *                 cart: 
 *                   type: object
 *                   items: {}
 * /api/v1/users/orders/{id}:
 *   get:
 *     summary: Get all orders in the user's cart
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimun: 1
 *         description: user Id
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: int
 *                   example: 1
 *                 username:
 *                   type: string
 *                   example: "Ian Rosas"
 *                 email:
 *                   type: string
 *                   example: "ian@gmail.com"
 *                 orders: 
 *                   type: array
 *                   items: []
 */

router.post("/users", createUser);
router.get("/users/:id", getAllProductsInCartByUser);
router.get("/users/orders/:id", getAllOrdersByUser);

module.exports = router;