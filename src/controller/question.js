const sequelize = require("./../../models/index").sequelize;
const question = sequelize.import("./../../models/questions");
const alternatives = sequelize.import("./../../models/alaternatives");

module.exports = () => {
    return {
        create: (req, res) => {
            const Challenger = req.params.id
            data = {
                name: req.body.question.name,
                challenger: Challenger,
                alternatives: {
                    one: req.body.question.alternatives.one,
                    two: req.body.question.alternatives.two,
                    three: req.body.question.alternatives.three,
                    four: req.body.question.alternatives.four
                },
                correct: req.body.correct
            }


            question.create({
                name: data.name,
                challenger: data.id
            }).then((question) => {
                alternatives.create({
                    name: data.alternatives.one.name,
                    question: question.id,
                    correct: data.alternatives.one.correct
                })

                alternatives.create({
                    name: data.alternatives.two.name,
                    question: question.id,
                    correct: data.alternatives.two.correct
                })

                alternatives.create({
                    name: data.alternatives.three.name,
                    question: question.id,
                    correct: data.alternatives.three.correct
                })


                alternatives.create({
                    name: data.alternatives.four.name,
                    question: question.id,
                    correct: data.alternatives.four.correct
                })

                res.status(200).end();
            })









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