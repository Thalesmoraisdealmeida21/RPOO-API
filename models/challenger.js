'use strict';
module.exports = (sequelize, DataTypes) => {
    const challenger = sequelize.define('challenger', {

        name: DataTypes.STRING,
        level: DataTypes.INTEGER,
        group: DataTypes.INTEGER,
        userAdmin: DataTypes.INTEGER,
        difficulty: DataTypes.ENUM('h', 'e', 'm')

    }, {});
    challenger.associate = function(models) {
        challenger.belongsToMany(models.skil, {
            through: "skilschallengers", 
            as: "skils",
            foreignKey: "challengerId"
        })
    };
    return challenger;
};