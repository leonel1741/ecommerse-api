const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "E-commerse API",
            version: "1.0.0",
            description: "API para una app de compras",
        }
    },
    apis: [
        "./src/routes/auth.routes.js",
        "./src/routes/users.routes.js",
        "./src/routes/products.routes.js",
        "./src/routes/productsInCart.routes.js",
        "./src/routes/cart.routes.js",

        "./src/models/users.model.js",
        "./src/models/products.model.js",
        "./src/models/productsInCart.model.js",
        "./src/models/carts.model.js",
    ],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
    app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    app.get("/api/v1/docs.json", (req, res) => {
        res.setHeader("ContentType", "application/json");
        res.send(swaggerSpec);
    });
    console.log(`Documentacion disponible en http:/localhost:${port}/api/v1/docs`);
};

module.exports = swaggerDocs;