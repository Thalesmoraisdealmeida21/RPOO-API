const { verificarToken } = require("./../services/auth")

const validateRequest = (req, res, next) => {
    const token = req.headers.authorization;
    console.log("Ola")



    verificarToken(token, (err, payload) => {
        if (err) {
            res.status(401).end();
        }


        res.locals.payload = payload;
        return next();

    })

}


module.exports = { validateRequest }