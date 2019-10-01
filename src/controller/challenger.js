const sequelize = require("./../../models/index").sequelize;
const Challenger = sequelize.import("./../../models/challenger")

module.exports = () => {
    return {
        create: (req, res) => {
            let data = {
                name: req.body.name,
                level: req.body.level,
                group: req.body.group,
                type: 1,
                user: req.body.user,
                experience: req.body.experience
            }

            if (data.group == "Nenhum") {
                data.group = "1"
            }

            Challenger.create({
                name: data.name,
                level: data.level,
                group: data.group,
                userAdmin: data.user,
                experience: data.experience
            }).then((challenger) => {
                res.status(200).json(challenger.id)
            })

        },

        ToList: (req, res) => {
            Challenger.findAll().then((challengers) => {
                res.status(200).json(challengers)
            })
        }
    }
}