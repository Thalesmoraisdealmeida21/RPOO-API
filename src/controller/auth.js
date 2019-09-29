const sequelize = require("./../../models/index").sequelize
const user = sequelize.import("./../../models/user")
const { sign, verify } = require('jsonwebtoken')
const { random, pbkdf2Sync } = require('crypto');
const { gerarToken, verificarToken } = require("./../services/auth")


module.exports = () => {


    return {
        login: (req, res) => {
            const { username, password } = req.body
            user.findOne({ where: { username: username } }).then((cadastrado) => {
                if (cadastrado) {
                    console.log("Entrou no primeir if")
                    console.log("Senha:" + password)
                    if (cadastrado.password === password) {
                        console.log("Entrou no segundo if")
                        const token = gerarToken(cadastrado.id, username)
                        user.update({ token: token.token }, { where: { id: cadastrado.id } })
                        res.json({ token, "username": cadastrado.username, "id": cadastrado.id, "status": "true" }).end();
                    }
                } else {
                    res.status(401).json({ "token": "1" }).end()
                }

            })

        },

        genSession: (req, res) => {
            const token = req.body.token




        },


        validToken: (req, res) => {
            const id = req.params.id
            const token = req.body.token;

            user.find({ where: { id: id } }).then((user) => {
                if (user.token == token) {
                    return true
                } else {
                    return false
                }
            })


        },

        getStatus: (req, res) => {

            const id = req.params.id
            const token = req.body.token;

            res.send("token")

            /*user.find({ where: { id: id } }).then((status) => {
                console.log("token da req: " + status.token)
                console.log("token da serv: " + token)
                
            })*/


        },
    }
}