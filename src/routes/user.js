const user = require("./../controller/user")
const User = user();
const { validateRequest } = require("./../middleware/auth")
module.exports = (router) => {

    router.post("/user", (req, res) => {
        User.createUser(req, res)
    })

    router.post("/status/:id", (req, res) => {
        User.getStatus(req, res);
    })
    router.get("/auth/status/:id", (req, res) => {
        User.setLogado(req, res);
    })


    router.get("/user", (req, res) => {
        User.getUsers(req, res);
    })


    router.get("/user/skils/:id", (req, res) => {
        User.getSkilsUser(req, res)
    })

    router.get("/user/:id", (req, res) => {
        User.getUser(req, res);
    })


    router.delete("/user/:id", (req, res) => {
        User.deleteUser(req, res)
    })

    router.get("/user/auth/status/:id", (req, res) => {
        User.getStatus(req, res)
    })


    router.put("/user/:id", (req, res) => {

    })


    return router;
}