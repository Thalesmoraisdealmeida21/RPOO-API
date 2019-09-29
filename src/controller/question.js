const sequelize = require("./../../models/index").sequelize;
const question = sequelize.import("./../../models/questions");
const alternatives = sequelize.import("./../../models/alaternatives");

module.exports = () => {
    return {
        create: (req, res) => {
            const Challenger = req.params.id
            data = {
                name: req.body.name,
                challenger: Challenger
            }

            if (question.create({
                    name: data.name,
                    challenger: data.id
                })) {
                res.status(200).end();
            }
        },

        addAlternatives: (req, res) => {
            const id = req.params.id;

            const data = {
                name: req.body.name,
                question: id,
                correct: req.body.correct
            }


            alternatives.create({
                name: data.name,
                question: data.question,
                correct: data.correct
            })

            res.status(200).end();



        }
    }
}