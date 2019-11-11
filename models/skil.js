'use strict';
module.exports = (sequelize, DataTypes) => {
    const skil = sequelize.define('skil', {
        name: DataTypes.STRING,
        exp: DataTypes.INTEGER,
        level: DataTypes.INTEGER
    }, {});
    skil.associate = function(models) {
    

        skil.belongsToMany(models.challenger, {
            through: "skilschallengers", 
            as: "skils",
            foreignKey: "skilId"
        })
       
    };

    return skil;
};