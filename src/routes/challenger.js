const challenger = require("./../controller/challenger")
const Challenger = challenger();

module.exports = (router) => {


    router.get("/challengers", (req, res) => {
        Challenger.ToList(req, res)
    })

    router.get("/challenger/:id", (req, res) => {
        Challenger.getChallenger(req, res)
    })

    router.post("/challengers/end", (req, res) => {
        Challenger.finishChallenger(req, res);
    })

    router.post("/challenger/create", (req, res) => {
        Challenger.create(req, res)
    })

    router.post("/challenger/check", (req, res)=>{
        Challenger.saveScore(req, res)
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