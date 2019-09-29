const sequelize = require("./../../models/index").sequelize
const userskil = sequelize.import("./../../models/userskil");
const userModel = sequelize.import("./../../models/user");

const checkLevel = (skil) => {
    let lvlUp = 0;
    const levels = [

        { exp: 0, lvl: 1 },
        { exp: 100, lvl: 2 },
        { exp: 200, lvl: 3 },
        { exp: 400, lvl: 4 },
        { exp: 800, lvl: 5 },
        { exp: 1500, lvl: 6 },
        { exp: 2600, lvl: 7 },
        { exp: 4200, lvl: 8 },
        { exp: 6400, lvl: 9 },
        { exp: 9300, lvl: 10 },

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
        { exp: 100, lvl: 2 },
        { exp: 200, lvl: 3 },
        { exp: 400, lvl: 4 },
        { exp: 800, lvl: 5 },
        { exp: 1500, lvl: 6 },
        { exp: 2600, lvl: 7 },
        { exp: 4200, lvl: 8 },
        { exp: 6400, lvl: 9 },
        { exp: 9300, lvl: 10 },

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


module.exports = { checkLevel, checkLevelUser, UpdateLevelUser }