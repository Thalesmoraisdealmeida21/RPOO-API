const sequelize = require("./../../models/index").sequelize;
const Challenger = sequelize.import("./../../models/challenger")
const alternatives = sequelize.import("./../../models/alaternatives")
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
        },

        getQuestion: (req, res) => {
            const Challenger = req.params.challenger
            const question = req.params.id

            questions.findOne({
                where: {
                    challenger: Challenger,
                    id: question
                }
            }).then((question) => {
                res.status(200).json(question)
            })

        },

        getAlternatives: (req, res) => {

            const question = req.params.id

            alternatives.findAll({
                where: {
                    question: question
                }
            }).then((dataResult) => {
                res.status(200).json(dataResult)
            })

        },

        getFirstQuestion: (req, res) => {
            const challenger = req.params.challenger;

            questions.min('id', {
                where: {
                    challenger: challenger
                }
            }).then((firstQuestion) => {
                res.status(200).json(firstQuestion);
            })

        }


    }
}