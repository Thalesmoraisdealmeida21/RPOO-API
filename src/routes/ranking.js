const user = require("./../controller/user")
const ranking = require("./../controller/ranking")
const Rank = ranking();
const User = user();

const { validateRequest } = require("./../middleware/auth")


module.exports = (router) => {


    router.get("/rank", (req, res)=> {
        Rank.genRankGlobal(req, res)
    })
}