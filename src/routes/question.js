const question = require("./../controller/question")
const Question = question();

module.exports = (router) => {


    router.post("/question/create/:id", (req, res) => {
        Question.create(req, res)
    })


    router.post("/question/addalternatives/:id", (req, res) => {
        Question.addAlternatives(req, res)
    })


    router.post("/questions", (req, res) => {

    })

    router.post("/questions/remove/:id", (req, res) => {

    })



}