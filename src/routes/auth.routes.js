const { Router } = require("express");
const { userLogin } = require("../controllers");

const router = Router();

/**
 * @openapi
 * /api/v1/auth/login:
 *   post:
 *     summary: Register a new user into the app
 *     tags: [Users]
 *     requestBody:
 *       description: To register a new user you need a username, email, password
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                   example: ian@gmail.com
 *                 password: 
 *                   type: string
 *                   example: 1234
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 username:
 *                   type: string
 *                   example: Ian Rosas
 *                 email:
 *                   type: string
 *                   example: ian@gmail.com
 *                 token:
 *                   type: string
 *                   example: ""
 *
 */

router.post("/auth/login", userLogin);

module.exports = router;