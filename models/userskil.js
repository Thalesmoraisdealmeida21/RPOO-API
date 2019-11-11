'use strict';
module.exports = (sequelize, DataTypes) => {
    const userskil = sequelize.define('userskil', {
        iduser: {
            type: DataTypes.INTEGER,
            primaryKey: true,

        },
        idskil: DataTypes.INTEGER,
        level: DataTypes.INTEGER,
        experience: DataTypes.INTEGER
    }, {});
    userskil.associate = function(models) {
      
    };
    return userskil;
};