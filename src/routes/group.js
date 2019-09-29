const group = require("./../controller/group")
const Group = group();

module.exports = (router) => {


    router.get("/groups", (req, res) => {
        Group.toList(req, res);
    })

    router.post("/groups/create", (req, res) => {
        Group.create(req, res);
    })


    router.get("/groups/find/:id", (req, res) => {
        Group.findOne(req, res);
    })

    router.delete("/groups/delete/:id", (req, res) => {
        Group.delete(req, res);
    })
}