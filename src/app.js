const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./utils/database");
const handleError = require("./middlewares/error.middlewares");
const initModels = require("./models/initModels");
const { UserRoutes, AuthRoutes, ProductRoutes, ProductInCartRoutes, CartRoutes } = require("./routes");
const transporter = require("./utils/mailer");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

initModels();

db.authenticate()
    .then(() => console.log("Autenticacion Exitosa"))
    .catch(error => console.log(error));

db.sync({force: false})
    .then(()=> console.log("base de datos Sincronizada"))
    .catch(error => console.log(error));

transporter.verify()
    .then(() => console.log("Estamos listos para enviar correos a diestra y siniestra"));

app.use("/api/v1", UserRoutes);
app.use("/api/v1", AuthRoutes);
app.use("/api/v1", ProductRoutes);
app.use("/api/v1", ProductInCartRoutes);
app.use("/api/v1", CartRoutes);

app.use(handleError);

module.exports = app;