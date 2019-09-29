const sequelize = require("./../../models/index").sequelize
const skil = sequelize.import("./../../models/skil")
const userSkil = sequelize.import("./../../models/userskil")
const level = require("./../repository/level");
const { checkLevel } = require("./../repository/level")
const userModel = sequelize.import("./../../models/user")



module.exports = () => {
    return {
        listSkil: (req, res) => {
            skil.findAll().then((skils) => {
                if (skils) {
                    res.status(200).json(skils)
                } else {
                    res.status(200).json({ msg: "Nenhuma skil encontrada" })
                }
            })
        },


        createSkil: (req, res) => {
            const data = {
                name: req.body.name,
                level: 1,
                exp: 0
            }

            skil.create({
                name: data.name,
                level: data.level,
                exp: data.exp
            })

            res.status(200).json({ msg: "Skil criada  com sucesso" })
        },

        levelUp: (req, res) => {

        },


        levelDown: (req, res) => {

        },

        setExp: (req, res) => {
            const { experience } = req.body;
            const id = req.params.id
            const user = req.params.user



            userSkil.findOne({ where: { idskil: id, iduser: user } }).then((skilBefore) => {
                console.log(skilBefore)
                userSkil.update({
                    experience: skilBefore.experience + parseInt(experience)

                }, { where: { idskil: id, iduser: user } })
            })


            userSkil.findOne({ where: { idskil: id, iduser: user } }).then((skilAfter) => {
                checkLevel(skilAfter)
                userSkil.update({
                    level: skilAfter.level
                }, { where: { idskil: id, iduser: user } })
            })


            userModel.findOne({ where: { id: user } }).then((usuario) => {
                if (usuario) {
                    level.checkLevelUser(usuario)
                    level.UpdateLevelUser(usuario)
                }
            })

            res.status(200).end();

        },

        getSkilUser: (req, res) => {
            const ID = req.params.id;

            userSkil.findAll({ where: { iduser: ID } }).then((skilsUser) => {
                res.status(200).json(skilsUser).end();
            })

        }



    }
}