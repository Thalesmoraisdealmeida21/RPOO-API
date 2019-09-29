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

            if (Challenger.create({
                    name: data.name,
                    level: data.level,
                    group: data.group,
                    userAdmin: data.user,
                    experience: data.experience
                })) {
                res.status(200).end();
            }
        },

        ToList: (req, res) => {
            Challenger.findAll().then((challengers) => {
                res.status(200).json(challengers)
            })
        }
    }
}