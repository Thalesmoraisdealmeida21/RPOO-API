'use strict';
module.exports = (sequelize, DataTypes) => {
    const alaternatives = sequelize.define('alaternatives', {
        question: {
            type: DataTypes.INTEGER,
            references: {
                model: "questions",
                key: "id"
            }
        },
        name: DataTypes.STRING,
        correct: DataTypes.STRING
    }, {});
    alaternatives.associate = function(models) {
        // associations can be defined here
    };
    return alaternatives;
};