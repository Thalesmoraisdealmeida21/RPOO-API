const sequelize = require("./../../models/index").sequelize;
const User = sequelize.import("./../../models/user")
const skils = sequelize.import("./../../models/userskil")
const skil = sequelize.import("./../../models/skil")


module.exports = () => {
    return {
        getUsers: (req, res) => {
            User.findAll().then((users) => {
                res.status(200).json(users);
            })
        },


        createUser: (req, res) => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
            res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")

            const data = {
                username: req.body.username,
                password: req.body.password,
                email: req.body.email,
            }



            var lastID;
            var skiles;

            //valida usuario
            User.findOne({ where: { username: data.username } }).then(user => {

                if (user) {
                    console.log("user exists outro")
                    res.status(200).json(false).end();
                } else {
                    User.create({
                        username: data.username,
                        password: data.password,
                        email: data.email,
                        level: 1

                    }).then((user) => {
                        skil.findAll().then((skilAll) => {


                            var json = JSON.stringify(skilAll)
                            var arrayJson = JSON.parse(json);



                            arrayJson.forEach((newSkil) => {
                                skils.create({
                                    iduser: user.id,
                                    idskil: newSkil.id,
                                    level: 1,
                                    experience: 0
                                })
                            })

                        })
                    }).then(() => {
                        res.status(200).json(true)
                    })
                }

            })













        },


        getUser: (req, res) => {

            const idUser = req.params.id
            User.find({ where: { id: idUser } }).then((user) => {
                if (user) {
                    res.status(200).json(user);
                } else {
                    res.status(200).json({ msg: "Usuario não encontrado" })
                }

            })
        },

        deleteUser: (req, res) => {
            const idUser = req.params.id

            User.destroy({ where: { id: idUser } }).then((affectRows) => {
                if (affectRows <= 0) {
                    res.json("Nenhum usuario com id: " + idUser)
                } else {
                    res.status(200).json({ msg: "Usuario deletado com sucesso" })
                }
            })
        },

        getSkilsUser: (req, res) => {
            const id = req.params.id
            skils.findAll({ where: { iduser: id } }).then((skilsUser) => {
                res.status(200).json(skilsUser)
            })
        },

        getStatus: (req, res) => {
            const id = req.params.id
            User.find({ where: { id: id } }).then((status) => {
                res.status(200).json({ "status": status.status })
            })
        },

        getToken: (req, res) => {
            const id = req.params.id
            User.find({ where: { id: id } }).then((status) => {
                res.status(200).json({ "token": status.token })
            })
        },

        setLogado: (req, res) => {
            const id = req.params.id
            User.update({ status: true }, { where: { id: id } })
            res.end();
        },



    }
}