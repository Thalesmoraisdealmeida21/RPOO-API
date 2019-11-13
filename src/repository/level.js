const sequelize = require("./../../models/index").sequelize
const userskil = sequelize.import("./../../models/userskil");
const userModel = sequelize.import("./../../models/user");
const scoreModel = sequelize.import("./../../models/score");
const questionModel = sequelize.import("./../../models/questions")
const User = sequelize.import("./../../models/user")
const skilModel = sequelize.import("./../../models/skil")
const Op = sequelize.Op;

const checkLevel = (skil) => {
    let lvlUp = 0;
    const levels = [

        { exp: 0, lvl: 1 },
        { exp: 50, lvl: 2 },
        { exp: 100, lvl: 3 },
        { exp: 200, lvl: 4 },
        { exp: 500, lvl: 5 },


    ]


    levels.forEach(level => {
        if (skil.experience >= level.exp) {
            lvlUp = level.lvl;
        }
    });

    skil.level = lvlUp;



}

const UpdateLevelUser = (user) => {
    let lvlUp = 0;

    const levels = [

        { exp: 0, lvl: 1 },
        { exp: 50, lvl: 2 },
        { exp: 100, lvl: 3 },
        { exp: 200, lvl: 4 },
        { exp: 500, lvl: 5 },
    ]


    levels.forEach(level => {
        if (user.experience >= level.exp) {
            lvlUp = level.lvl;
        }
    });

    user.level = lvlUp;

    userModel.update({
        level: lvlUp
    }, {
        where: {
            id: user.id
        }
    })
}


const checkLevelUser = (user) => {
    var soma = 0,
        count = 0;
    var media = 0;

    userskil.findAll({
        where: {
            iduser: user.id
        }
    }).then((skils) => {
        skils.forEach((skil) => {
            soma += skil.experience
            count++;

        })

        media = soma / count;
        user.experience = media;

        userModel.update({
            experience: media
        }, {
            where: {
                id: user.id
            }
        })
    })
}

const setScore = (habilidade, question, user, exp) =>{
    console.log("seta score")
    scoreModel.create({
        user: user,
        question: question,
        punctuation: exp,
        habilidade: habilidade,
        hit: "S"
    })

}

const setExperience = (skil, user, challenger) => {
    var questions = [];



    questionModel.findAll({where: {
        challenger: challenger
    }}).then((quests)=>{

        quests.forEach((quest)=>{
            questions.push(quest.id)
        })
       

        scoreModel.findAll({where: {
            user: user,
            habilidade: skil
               
               
            
        }}).then((scores)=> {
            var total = 0;
           /* scores.forEach((scr)=>{
               console.log(scr.punctuation)
            })*/
           
          
            scores.forEach((scr)=>{
                total = total + scr.punctuation
            })
            totalHabilidade = total;

            userskil.update({
                experience: total
            }, {
                where: {
                    idskil: skil,
                    iduser: user
                }
            })

           

           
    
        })

      
     
    })

    userObject = {
        id: user
    }
    
}


const checkRankingPosition = () => {
   User.findAll({order: [['experience', 'DESC']]}).then((ranking)=> {
        var i = 1;
        ranking.forEach((user)=>{
        
                User.update({
                    position: i
                }, {
                    where: {
                        id: user.id
                    }
                })
            

            i++;
        })
    })


}

module.exports = { checkRankingPosition, checkLevel, checkLevelUser, UpdateLevelUser, setScore, setExperience }