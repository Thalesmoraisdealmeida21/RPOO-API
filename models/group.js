'use strict';
module.exports = (sequelize, DataTypes) => {
    const group = sequelize.define('group', {
        name: DataTypes.STRING,
        description: DataTypes.STRING
    }, {});
    group.associate = function(models) {
        // associations can be defined here
    };
    return group;
};