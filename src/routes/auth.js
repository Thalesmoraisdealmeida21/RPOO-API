const auth = require("./../controller/auth")
const Auth = auth();
const user = require("./../controller/user")
const User = user()

module.exports = (router) => {

    router.post("/login", (req, res) => {
        Auth.login(req, res)
    })

    router.get("/auth/token/:id", (req, res) => {
        User.getToken(req, res);
    })

    router.post("/auth/token/valida/:id", (req, res) => {
        Auth.validToken(req, res)
    })


    router.post("/logout", (req, res) => {

    })
}