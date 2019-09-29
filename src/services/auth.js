const { sign, verify } = require('jsonwebtoken')
const { random, pbkdf2Sync } = require('crypto');
const environment = "development"
const { secret } = require("../../config/config")[environment]


const gerarToken = (id, username) => {
    const token = sign({
            id,
            username
        },
        secret
    )

    return { token }
}


const verificarToken = (token, callback) => {
    return verify(token, secret, callback)
}


module.exports = { verificarToken, gerarToken }