const sequelize = require("./../../models/index").sequelize;
const Challenger = sequelize.import("./../../models/challenger")
const alternatives = sequelize.import("./../../models/alaternatives")
const questions = sequelize.import("./../../models/questions.js")
const skilModel = sequelize.import("./../../models/skil")
const userskil = sequelize.import("./../../models/userskil")
const scorev = sequelize.import("./../../models/score");
const answerModel = sequelize.import("./../../models/answers")

const {checkRankingPosition, setScore, setExperience, checkLevel, checkLevelUser,UpdateLevelUser} = require("./../repository/level")
const Op = sequelize.Op;
const User = sequelize.import("./../../models/user");


module.exports = () => {
    return {
        create: (req, res) => {

            
            let dif = "";
            const dificuldade =  req.body.difficulty
            if(dificuldade == "Facil"){
                dif = "e"
            }
            if(dificuldade == "Medio"){
                dif = "e"
            }
            if(dificuldade == "Dificil"){
                dif = "h" 
            }
            
       
            console.log("Dificuldade: " + dif)
            let data = {
                name: req.body.name,
                level: req.body.level,
                group: req.body.group,
                type: 1,
                user: req.body.user,
                experience: req.body.experience,
                difficulty: dif,
                typeChallenger: req.body.type
                
            }

            if (data.group == "") {
                Challenger.create({
                    name: data.name,
                    level: data.level,
                    group: null,
                    userAdmin: data.user,
                    experience: data.experience,
                    difficulty: data.difficulty,
                    type: data.typeChallenger
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

        },

        saveScore: (req, res) => {
              const question = req.body.question;
              const resp = req.body.answer;  
              const exp = req.body.experience;
              const user = req.body.user;
              const habilidade = req.body.skil

              
              alternatives.findAll({where: {
                  question: question,
                  name: resp,
                  correct: 1
              }}).then((resp)=>{
                        if(resp.length > 0){
                            res.status(200).json({msg: "Resposta Correta"})
                            setScore(habilidade, question, user, exp);
                        } else {
                            res.status(200).json({msg: "Resposta Errada"})
                        }
              })
        },

        saveScoreObjectiveCorrect: (req, res)=>{
            const question = req.body.question;
         
            const exp = req.body.experience;
            const user = req.body.user;
            const habilidade = req.body.skil
            const answerID = req.body.answerID
            

            setScore(habilidade, question, user, exp);

            answerModel.update({
                corrected: true
            }, {
                where: {
                    id: answerID
                }
            })

            res.status(200).json("sucesso")
        },


        finishChallenger: (req, res)=>{
            const challenger = req.body.challenger;
            const skil = req.body.skil;
            console.log("skil: " + skil)
            const user = req.body.user;
            
            checkRankingPosition();

        
            setExperience(1, user, challenger)
            setExperience(2, user, challenger)
            setExperience(3, user, challenger)
            setExperience(4, user, challenger)
           

           

            userskil.findOne({ where: { idskil: skil, iduser: user } }).then((skilAfter) => {
                checkLevel(skilAfter)
                userskil.update({
                    level: skilAfter.level
                }, { where: { idskil: skil, iduser: user } })
            })


           

            User.findOne({where: {
                id:  user
            }}).then((user)=>{
                checkLevelUser(user);
                UpdateLevelUser(user);
            })

            res.status(200).json({msg: "Desafio Finalizado"})
        },

        getChallenger: (req, res)=>{
            Challenger.findOne({where: { id: req.params.id}}).then((challenger)=>{
                res.status(200).json(challenger)
            })
        },

        saveAnswer: (req, res)=> {
            const data = {
                iduser: req.body.iduser,
                idquestion: req.body.idquestion,
                answer: req.body.answer
            }

            answerModel.create({
                iduser: data.iduser,
                idquestion: data.idquestion,
                answer: data.answer,
              
            })

            res.status(200).json({"msg": "sucesso"})
        },
        
        
        getChallengerDescritives: (req, res) => {
            Challenger.findAll({where: {
                type: "Descritivo"
            }}).then((challengers)=>{
                res.status(200).json(challengers);
            })
        },


        getUsersAnswerChallenger: (req, res) => {
            const challenger = req.params.id
            const sql = "SELECT username, id from Users WHERE id in (SELECT iduser FROM answers WHERE idquestion in (SELECT id FROM questions WHERE challenger = "+ req.params.id +" ))"

            sequelize.query(sql).then((alunos)=>{
                res.status(200).json(alunos[0])
            })
        },

        getAnswerForUser: (req, res) => {
             const idUser = req.params.userid 
             const idChallenger = req.params.challengerid

             const sql = "SELECT answers.id as answerID, answers.answer, questions.name, questions.id, corrected from answers, questions  WHERE idquestion =  questions.id  and iduser = " + idUser + " and idquestion in (select id from questions where questions.challenger =" + idChallenger + ")"
            sequelize.query(sql).then((resul)=>{
                res.status(200).json(resul[0])
            })

        }



        


    }
}