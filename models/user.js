'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        level: DataTypes.INTEGER,
        email: DataTypes.STRING,
        status: DataTypes.BOOLEAN,
        token: DataTypes.STRING,
        bio: DataTypes.STRING,
        experience: DataTypes.INTEGER
    }, {});
    User.associate = function(models) {

    };
    return User;
};