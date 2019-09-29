'use strict';
module.exports = (sequelize, DataTypes) => {
    const challenger = sequelize.define('challenger', {

        name: DataTypes.STRING,
        level: DataTypes.INTEGER,
        group: DataTypes.INTEGER,
        userAdmin: DataTypes.INTEGER,
        experience: DataTypes.INTEGER

    }, {});
    challenger.associate = function(models) {
        // associations can be defined here
    };
    return challenger;
};