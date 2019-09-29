const skil = require("./../controller/skil")
const Skil = skil();

module.exports = (router) => {

    router.get("/skil", (req, res) => {
        Skil.listSkil(req, res);
    })

    router.get("/skil/find/:id", (req, res) => {
        Skil.getSkilUser(req, res);
    })

    router.post("/skil/create", (req, res) => {
        Skil.createSkil(req, res)
    })

    router.post("/skil/exp/:id/:user", (req, res) => {
        Skil.setExp(req, res);
    })




    return router

}