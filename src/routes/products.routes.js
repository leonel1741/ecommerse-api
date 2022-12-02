const { Router } = require("express");
const { getProductsByQuantity, createProductWithImage } = require("../controllers");

const router = Router();

/**
 * @openapi
 * /api/v1/products:
 *   get:
 *     summary: Get all products in the user's cart
 *     tags: [Products]
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items: []
 * /api/v1/new-product:
 *   post:
 *     summary: Register a new product into the app
 *     tags: [Products]
 *     requestBody:
 *       description: To register a new product you need a name, price, availableQty, status, userId, image
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/newproduct"
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
 *                     $ref: "#/components/schemas/Products"
 *
 */

router.get("/products", getProductsByQuantity);
router.post("/new-product", createProductWithImage);

module.exports = router;