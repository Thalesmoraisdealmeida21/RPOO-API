const sequelize = require("./../../models/index").sequelize;
const Challenger = sequelize.import("./../../models/challenger")
const alternatives = sequelize.import("./../../models/alaternatives.js")
const questions = sequelize.import("./../../models/questions.js")
const Op = sequelize.Op;


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

            if (data.group == "") {
                Challenger.create({
                    name: data.name,
                    level: data.level,
                    group: null,
                    userAdmin: data.user,
                    experience: data.experience
                }).then((challenger) => {
                    res.status(200).json(challenger.id)
                })
            } else {
                Challenger.create({
                    name: data.name,
                    level: data.level,
                    group: data.group,
                    userAdmin: data.user,
                    experience: data.experience
                }).then((challenger) => {
                    res.status(200).json(challenger.id)
                })
            }



        },

        ToList: (req, res) => {
            Challenger.findAll().then((challengers) => {
                res.status(200).json(challengers)
            })
        },

        deleteChallenger: (req, res) => {
            const id = req.params.id


            Challenger.destroy({
                where: {
                    id: id
                }
            })

            res.status(200).end()



        },

        ToListGlobal: (req, res) => {
            Challenger.findAll({
                where: {
                    group: {
                        [Op.is]: null
                    }
                }
            }).then((challengers) => {
                res.status(200).json(challengers)
            })
        }
    }
}