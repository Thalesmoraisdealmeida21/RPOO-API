module.exports = {
    development: {

        host: 'localhost',
        secret: '1C3C7E1694F1E9DAD939399E87E5FFB5DF06B2327CA31B409CB3',
        dialect: 'mysql',
        username: "thales",
        password: "password",
        database: "db_api_rpg",

    },
    production: {
        port: process.env.EV_PORT,
        host: process.env.EV_HOST,
        database: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            name: process.env.DB_NAME
        },
        secret: process.env.JWT_SECRET
    }
};