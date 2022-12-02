const { AuthServices } = require("../services");

const userLogin = async (req, res, next) => {
    try {
        const credentials = req.body;
        const result = await AuthServices.authenticate(credentials);
        if (result) {
            const { id, username, email } = result.result;
            const user = { id, username, email };
            const token = await AuthServices.getToken(user);
            user.token = token;
            console.log(token);
            res.json({ ...user });
        } else {
            res.status(400).json({ message: "Informacion invalida" });
        }
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Email o contraseña invalida",
        })
    }
}

module.exports = {
    userLogin,
}