const challenger = require("./../controller/challenger")
const Challenger = challenger();

module.exports = (router) => {



    router.post("/challenger/create", (req, res) => {
        Challenger.create(req, res)
    })


    router.get("/challengers", (req, res) => {
        Challenger.ToList(req, res)
    })

    router.get("/challengers/all", (req, res) => {
        Challenger.ToListGlobal(req, res)
    })


    router.delete("/challengers/delete/:id", (req, res) => {
        Challenger.deleteChallenger(req, res)
    })
}