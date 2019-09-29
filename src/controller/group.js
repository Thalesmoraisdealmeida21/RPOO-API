const sequelize = require("./../../models/index").sequelize
const Group = sequelize.import("./../../models/group.js");

module.exports = () => {
    return {

        create: (req, res) => {
            data = {
                name: req.body.name,
                description: req.body.descriptions
            }

            Group.create({
                name: data.name,
                description: data.description
            })

            res.status(200).json({ msg: "Grupo Criado com sucesso" }).end();
        },


        toList: (req, res) => {
            Group.findAll().then((groups) => {
                res.status(200).json(groups);
            })
        },

        findOne: (req, res) => {
            const id = req.params.id
            Group.findOne({ where: { id: id } }).then((group) => {
                res.status(200).json(group)
            })
        },

        delete: (req, res) => {
            Group.destroy({
                where: {
                    id: req.params.id
                }
            })

            res.status(200).end();
        }
    }
}