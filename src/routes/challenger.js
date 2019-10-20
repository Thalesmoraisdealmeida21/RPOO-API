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
    router.get("/challenger/questao/primeira/:challenger", (req, res) => {
        Challenger.getFirstQuestion(req, res);
    })

    router.delete("/challengers/delete/:id", (req, res) => {
        Challenger.deleteChallenger(req, res)
    })
    router.get("/challengers/questao/alternativas/:id", (req, res) => {
        Challenger.getAlternatives(req, res)
    })
    router.get("/challengers/questao/:id/:challenger", (req, res) => {
        Challenger.getQuestion(req, res)
    })



}