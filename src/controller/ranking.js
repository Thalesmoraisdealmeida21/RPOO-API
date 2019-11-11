const sequelize = require("./../../models/index").sequelize
const User = sequelize.import("./../../models/user");
const {checkRankingPosition} = require("./../repository/level")



module.exports = () => {
    return {
        genRankGlobal: (req, res)=> {
            const idUser = req.body.userID
            checkRankingPosition()
            User.findAll({order: [['experience', 'DESC']]}).then((ranking)=> {
                let i = 0;
                
                    res.status(200).json(ranking);
            })
        }   
    }
}